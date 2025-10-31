import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Visitor from "@/models/Visitor";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Check if visitor has been counted in this session (using cookie)
    const sessionId = request.cookies.get("visitor_session_id");
    
    // Get or create visitor document (single document to track total)
    let visitor = await Visitor.findOne();
    
    if (!visitor) {
      visitor = new Visitor({ totalVisitors: 0 });
      await visitor.save();
    }

    // If this is a new session (no session cookie), increment count
    const shouldIncrement = !sessionId;
    
    if (shouldIncrement) {
      // Increment visitor count for new visitor or new session
      visitor.totalVisitors += 1;
      visitor.lastUpdated = new Date();
      await visitor.save();
    }

    // Create response with updated count
    const response = NextResponse.json({
      success: true,
      data: {
        totalVisitors: visitor.totalVisitors,
        lastUpdated: visitor.lastUpdated.toISOString(),
      },
    });

    // Set session cookie if this is a new visit (expires when browser closes)
    if (shouldIncrement) {
      response.cookies.set("visitor_session_id", Date.now().toString(), {
        path: "/",
        sameSite: "lax",
        // No maxAge means session cookie - expires when browser closes
      });
    }

    return response;
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return NextResponse.json(
      { success: false, error: "Failed to track visitor" },
      { status: 500 }
    );
  }
}

