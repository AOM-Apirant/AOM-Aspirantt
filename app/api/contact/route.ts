import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";

// Email transporter configuration
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  console.log("Email configuration:", {
    user: emailUser,
    passConfigured: !!emailPass,
    emailEnabled: process.env.EMAIL_ENABLED,
  });

  if (!emailUser || !emailPass) {
    console.log("Email credentials not configured");
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    secure: true,
    port: 465,
  });
};

// Check if email credentials are configured
const isEmailConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASS;
const EMAIL_ENABLED = process.env.EMAIL_ENABLED !== "false";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Check for recent submissions from same email (spam prevention)
    // Skip rate limiting in development mode
    if (process.env.NODE_ENV !== "development") {
      const recentSubmission = await Contact.findOne({
        email: email.toLowerCase(),
        createdAt: { $gte: new Date(Date.now() - 5 * 60 * 1000) }, // Last 5 minutes
      });

      if (recentSubmission) {
        return NextResponse.json(
          {
            error:
              "Please wait 5 minutes before submitting another message from the same email address.",
          },
          { status: 429 }
        );
      }
    }

    // Save to database
    const contact = new Contact({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    await contact.save();
    console.log("Contact saved to database successfully");

    // Try to send email notification
    if (EMAIL_ENABLED && isEmailConfigured) {
      const transporter = createTransporter();

      if (transporter) {
        try {
          console.log("Attempting to send email notification...");

          // Send email notification to admin
          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "aomaspirant@gmail.com",
            subject: `New Contact Form Submission: ${subject}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                  New Contact Form Submission
                </h2>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #1e293b; margin-top: 0;">Contact Details:</h3>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Message:</strong></p>
                  <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb;">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>
                
                <div style="background-color: #fef3c7; padding: 15px; border-radius: 5px; border-left: 4px solid #f59e0b;">
                  <p style="margin: 0; color: #92400e;">
                    <strong>Submitted:</strong> ${new Date().toLocaleString(
                      "en-IN",
                      {
                        timeZone: "Asia/Kolkata",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </p>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                  <p style="color: #64748b; font-size: 14px;">
                    This message was sent from the AOM Aspirant contact form.
                  </p>
                </div>
              </div>
            `,
          };

          // Send email to admin
          await transporter.sendMail(mailOptions);
          console.log("Admin notification email sent successfully");

          // Send auto-reply to user
          const autoReplyOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thank you for contacting AOM Aspirant",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h2 style="color: #2563eb; margin-bottom: 10px;">AOM Aspirant</h2>
                  <p style="color: #64748b;">Your Success Partner</p>
                </div>
                
                <div style="background-color: #f0f9ff; padding: 25px; border-radius: 8px; border-left: 4px solid #2563eb;">
                  <h3 style="color: #1e293b; margin-top: 0;">Thank you for reaching out!</h3>
                  <p style="color: #374151; line-height: 1.6;">
                    Dear ${name},
                  </p>
                  <p style="color: #374151; line-height: 1.6;">
                    We have received your message and appreciate you taking the time to contact us. 
                    Our team will review your inquiry and get back to you as soon as possible.
                  </p>
                  <p style="color: #374151; line-height: 1.6;">
                    <strong>Your message:</strong><br>
                    <em>"${subject}"</em>
                  </p>
                </div>
                
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h4 style="color: #1e293b; margin-top: 0;">What happens next?</h4>
                  <ul style="color: #374151; line-height: 1.6;">
                    <li>We'll review your message within 24 hours</li>
                    <li>You'll receive a detailed response from our team</li>
                    <li>If needed, we may follow up with additional questions</li>
                  </ul>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                  <p style="color: #64748b; font-size: 14px;">
                    Best regards,<br>
                    <strong>AOM Aspirant Team</strong><br>
                    <a href="mailto:aomaspirant@gmail.com" style="color: #2563eb;">aomaspirant@gmail.com</a>
                  </p>
                </div>
              </div>
            `,
          };

          await transporter.sendMail(autoReplyOptions);
          console.log("Auto-reply email sent successfully to user");
        } catch (emailError) {
          console.error("Email sending failed:", emailError);
          // Continue with success response even if email fails
        }
      } else {
        console.log("Email transporter not available");
      }
    } else {
      console.log("Email disabled or not configured");
    }

    return NextResponse.json(
      {
        message: "Message sent successfully! We'll get back to you soon.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
