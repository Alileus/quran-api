import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

export const tableSura = pgTable("sura", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type", { enum: ["MECCA", "MEDINA"] }).notNull(),
  manzil: integer("manzil").notNull(),
});
export type TypeSura =
  | InferSelectModel<typeof tableSura>
  | InferInsertModel<typeof tableSura>;

export const tableAya = pgTable("aya", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  juz: integer("juz").notNull(),
  hizb: integer("hizb").notNull(),
  sajda: boolean("sajda").default(false),
  suraId: integer("sura_id")
    .references(() => tableSura.id)
    .notNull(),
});
export type TypeAya =
  | InferSelectModel<typeof tableAya>
  | InferInsertModel<typeof tableAya>;
