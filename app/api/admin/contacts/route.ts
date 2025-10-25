import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";
import User from "@/models/User";
import { auth } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    // Check if user is authenticated and is admin
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    // Check if the user is admin
    const currentUser = await User.findOne({ email: session.user.email });
    if (!currentUser || !currentUser.isAdmin) {
      return NextResponse.json(
        { error: "Access denied. Admin only." },
        { status: 403 }
      );
    }

    // Fetch all contacts
    const contacts = await Contact.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ contacts, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await auth();

    // Check if user is authenticated and is admin
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    // Check if the user is admin
    const currentUser = await User.findOne({ email: session.user.email });
    if (!currentUser || !currentUser.isAdmin) {
      return NextResponse.json(
        { error: "Access denied. Admin only." },
        { status: 403 }
      );
    }

    const { contactId, status } = await request.json();

    if (!contactId || !status) {
      return NextResponse.json(
        { error: "Contact ID and status are required" },
        { status: 400 }
      );
    }

    const validStatuses = ["unread", "read", "replied"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { status },
      { new: true }
    );

    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Status updated successfully", contact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating contact status:", error);
    return NextResponse.json(
      { error: "Failed to update contact status" },
      { status: 500 }
    );
  }
}

