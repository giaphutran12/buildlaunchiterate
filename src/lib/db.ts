import { neon } from "@neondatabase/serverless";
import { env } from "./env";

// Validate environment variables at startup
if (!env.NEON_DATABASE_CONNECTION_STRING) {
  throw new Error("NEON_DATABASE_CONNECTION_STRING is required");
}

const sql = neon(env.NEON_DATABASE_CONNECTION_STRING);

// Test database connection
export async function testConnection() {
  try {
    const result = await sql`SELECT NOW() as current_time`;
    console.log("Database connection successful:", result[0]);
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

export { sql };
