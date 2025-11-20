import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Visitor from "@/models/Visitor";

type VisitorSnapshot = {
  totalVisitors: number;
  lastUpdated: Date;
};

const fallbackVisitorState: VisitorSnapshot = {
  totalVisitors: 0,
  lastUpdated: new Date(),
};

function createResponse(
  data: VisitorSnapshot,
  shouldIncrement: boolean,
  request: NextRequest,
  extras?: Record<string, unknown>
) {
  const response = NextResponse.json({
    success: true,
    data: {
      totalVisitors: data.totalVisitors,
      lastUpdated: data.lastUpdated.toISOString(),
      ...extras,
    },
  });

  if (shouldIncrement) {
    response.cookies.set("visitor_session_id", Date.now().toString(), {
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}

export async function GET(request: NextRequest) {
  const sessionId = request.cookies.get("visitor_session_id");
  const shouldIncrement = !sessionId;
  
  try {
    let isDbAvailable = true;

    try {
      await connectDB();
    } catch (dbError) {
      console.error("Visitor API: Database connection failed, using fallback.", dbError);
      isDbAvailable = false;
    }

    if (!isDbAvailable) {
      if (shouldIncrement) {
        fallbackVisitorState.totalVisitors += 1;
        fallbackVisitorState.lastUpdated = new Date();
      }

      return createResponse(fallbackVisitorState, shouldIncrement, request, {
        source: "memory",
        warning: "Database connection unavailable; using in-memory counter.",
      });
    }

    // Get or create visitor document (single document to track total)
    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = new Visitor({ totalVisitors: 0 });
      await visitor.save();
    }

    if (shouldIncrement) {
      visitor.totalVisitors += 1;
      visitor.lastUpdated = new Date();
      await visitor.save();
    }

    return createResponse(visitor, shouldIncrement, request);
  } catch (error) {
    console.error("Error tracking visitor:", error);
    
    // Return fallback response instead of error to prevent frontend crashes
    if (shouldIncrement) {
      fallbackVisitorState.totalVisitors += 1;
      fallbackVisitorState.lastUpdated = new Date();
    }
    
    return createResponse(fallbackVisitorState, shouldIncrement, request, {
      source: "fallback",
      warning: "Error occurred; using fallback counter.",
    });
  }
}

