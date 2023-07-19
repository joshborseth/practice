import {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  varchar,
} from "drizzle-orm/mysql-core";

export const moviesTable = mysqlTable("movies", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  description: varchar("description", { length: 1024 }),
  rating: int("rating"),
  genre: mysqlEnum("genre", ["action", "comedy", "drama", "horror"]),
  releaseDate: varchar("release_date", { length: 64 }),
  createdAt: varchar("created_at", { length: 64 }),
  updatedAt: varchar("updated_at", { length: 64 }),
});
