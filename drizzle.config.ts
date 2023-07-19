import type { Config } from "drizzle-kit";
import "dotenv/config";
export default {
  schema: "./src/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
