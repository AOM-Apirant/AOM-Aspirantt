import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { emailOrPhone } = body;

    if (!emailOrPhone) {
      return NextResponse.json(
        { error: 'Email or phone number is required' },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if input is email or phone
    const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    const phoneRegex = /^\d{10}$/;
    const cleanPhone = emailOrPhone.replace(/\D/g, '');

    let user;

    if (emailRegex.test(emailOrPhone)) {
      // Search by email
      user = await User.findOne({ email: emailOrPhone });
    } else if (phoneRegex.test(cleanPhone)) {
      // Search by phone number
      user = await User.findOne({ phoneNumber: cleanPhone });
    } else {
      return NextResponse.json(
        { error: 'Please enter a valid email or 10-digit phone number' },
        { status: 400 }
      );
    }

    if (!user) {
      return NextResponse.json(
        { error: 'No account found with this email or phone number' },
        { status: 404 }
      );
    }

    // Return success (we don't send email/OTP for simplicity, just verify the account exists)
    return NextResponse.json(
      { 
        message: 'Account verified successfully. Please proceed to reset your password.',
        email: user.email // Return email for security (masked in production if needed)
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

