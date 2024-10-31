import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/lib/db/drizzle",
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
// export default defineConfig({
//   out: "./src/lib/db/drizzle",
//   schema: "./src/lib/db/schema.ts",
//   dialect: "turso",
//   dbCredentials: {
//     url: process.env.TURSO_DATABASE_URL!,
//     authToken: process.env.TURSO_AUTH_TOKEN,
//   },
// });
