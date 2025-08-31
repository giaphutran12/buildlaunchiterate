import { z } from "zod";

const envSchema = z.object({
  NEON_DATABASE_CONNECTION_STRING: z.string().url().startsWith("postgresql://"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export const env = envSchema.parse(process.env);
export type Env = z.infer<typeof envSchema>;
