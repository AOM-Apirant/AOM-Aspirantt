// Test script to verify email functionality
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function testEmail() {
  console.log("Testing email configuration...");
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS configured:", !!process.env.EMAIL_PASS);
  console.log("EMAIL_ENABLED:", process.env.EMAIL_ENABLED);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("❌ Email credentials not configured");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
    port: 465,
  });

  try {
    // Test email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "aomaspirant@gmail.com",
      subject: "Test Email from AOM Aspirant",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Test Email</h2>
          <p>This is a test email to verify email functionality is working.</p>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Test email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.log("❌ Email test failed:", error.message);
  }
}

testEmail();
