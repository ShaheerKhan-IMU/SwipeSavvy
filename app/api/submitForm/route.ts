import { db } from "../../lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, phone, password, website } = body;

  try {
    await db.execute(
      "INSERT INTO users (name, email, phone, password, website) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, password, website]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ success: false, error: error });
  }
}
