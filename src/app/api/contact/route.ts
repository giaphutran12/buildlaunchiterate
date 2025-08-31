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

    // Send webhook to N8N (if configured)
    if (process.env.N8N_WEBHOOK_URL) {
      try {
        await fetch(process.env.N8N_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event: "contact_form_submitted",
            data: {
              id: result[0].id,
              name,
              company: company || "Not provided",
              phone: phone || "Not provided",
              email,
              problem_description,
              submitted_at: result[0].created_at,
            },
          }),
        });
      } catch (webhookError) {
        console.error("Webhook notification failed:", webhookError);
        // Don't fail the form submission if webhook fails
      }
    }

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
