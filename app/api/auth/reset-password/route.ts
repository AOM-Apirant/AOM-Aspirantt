import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { emailOrPhone, newPassword } = body;

    if (!emailOrPhone || !newPassword) {
      return NextResponse.json(
        { error: 'Email/phone number and new password are required' },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
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

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // Update user password
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json(
      { message: 'Password reset successfully. You can now login with your new password.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Password reset error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

