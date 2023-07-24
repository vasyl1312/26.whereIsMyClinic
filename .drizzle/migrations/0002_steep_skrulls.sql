CREATE TABLE IF NOT EXISTS "users3" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL
);

DROP TABLE users1;