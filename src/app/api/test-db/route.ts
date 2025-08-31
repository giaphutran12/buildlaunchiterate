import { NextResponse } from "next/server";
import { testConnection } from "@/lib/db";

export async function GET() {
  try {
    const isConnected = await testConnection();

    if (isConnected) {
      return NextResponse.json({
        status: "success",
        message: "Database connection successful",
      });
    } else {
      return NextResponse.json(
        {
          status: "error",
          message: "Database connection failed",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
