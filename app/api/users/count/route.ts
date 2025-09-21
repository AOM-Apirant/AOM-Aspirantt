import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    // Count total registered users
    const totalUsers = await User.countDocuments();

    // Count users who signed up via Google (users without password)
    const googleUsers = await User.countDocuments({
      password: { $exists: false },
    });

    // Count users who signed up via credentials (users with password)
    const credentialUsers = await User.countDocuments({
      password: { $exists: true },
    });

    return NextResponse.json({
      success: true,
      data: {
        totalUsers,
        googleUsers,
        credentialUsers,
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error fetching user count:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch user count" },
      { status: 500 }
    );
  }
}
