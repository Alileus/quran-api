import { db } from "@/lib/db";
import { tableSura } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/suras", async (c) => {
  try {
    const suras = await db.select().from(tableSura).execute();
    return c.json(suras, 200);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch Suras" }, 500);
  }
});

app.get("/suras/:id", async (c) => {
  const id = parseInt(c.req.param("id"), 10);
  if (isNaN(id)) {
    return c.json({ error: "Invalid Sura ID" }, 400);
  }

  try {
    const sura = await db
      .select()
      .from(tableSura)
      .where(eq(tableSura.id, id))
      .then((res) => res);

    if (sura.length === 0) return c.json({ error: "Sura not found" }, 404);

    return c.json(sura[0], 200);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch Sura" }, 500);
  }
});

export const GET = handle(app);
