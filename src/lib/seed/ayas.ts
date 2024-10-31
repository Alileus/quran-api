import { db } from "@/lib/db";
import { tableAya, TypeAya } from "@/lib/db/schema";

const seed: TypeAya[] = [];

export const ayaSeed = async () => {
  await db.insert(tableAya).values(seed);
};
