import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, problem_description } = body;

    // Basic validation
    if (!name || !email || !problem_description) {
      return NextResponse.json(
        {
          status: "error",
          message: "Name, email, and problem description are required",
        },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await sql`
      INSERT INTO contact_submissions (name, company, phone, email, problem_description)
      VALUES (${name}, ${company || null}, ${
      phone || null
    }, ${email}, ${problem_description})
      RETURNING id, created_at
    `;

    console.log("Contact form submitted:", {
      id: result[0].id,
      name,
      email,
      company,
      created_at: result[0].created_at,
    });

    return NextResponse.json({
      status: "success",
      message: "Contact form submitted successfully",
      id: result[0].id,
    });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to submit contact form",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
