import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    // Test if table exists by counting rows
    const countResult =
      await sql`SELECT COUNT(*) as count FROM contact_submissions`;
    const count = countResult[0]?.count || 0;

    return NextResponse.json({
      status: "success",
      message: "Table exists and is accessible",
      rowCount: count,
    });
  } catch (error) {
    console.error("Table test error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Table test failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    // Test inserting a sample record
    const testData = {
      name: "Test User",
      company: "Test Company",
      phone: "123-456-7890",
      email: "test@example.com",
      problem_description:
        "This is a test submission to verify the table works.",
    };

    const result = await sql`
      INSERT INTO contact_submissions (name, company, phone, email, problem_description)
      VALUES (${testData.name}, ${testData.company}, ${testData.phone}, ${testData.email}, ${testData.problem_description})
      RETURNING id, created_at
    `;

    // Clean up the test data
    await sql`DELETE FROM contact_submissions WHERE id = ${result[0].id}`;

    return NextResponse.json({
      status: "success",
      message: "Table insert/delete test successful",
      testId: result[0].id,
      testCreatedAt: result[0].created_at,
    });
  } catch (error) {
    console.error("Table test error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Table insert/delete test failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
