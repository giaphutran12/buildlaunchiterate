import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST() {
  try {
    // Create the contact_submissions table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        phone VARCHAR(50),
        email VARCHAR(255) NOT NULL,
        problem_description TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at)`;

    return NextResponse.json({
      status: "success",
      message: "Database table created successfully",
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to create table",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
