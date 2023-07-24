CREATE TABLE IF NOT EXISTS "users1" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"age" varchar(3) NOT NULL,
	"created_at" timestamp NOT NULL
);
