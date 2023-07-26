CREATE TABLE IF NOT EXISTS "clinics" (
	"id" serial PRIMARY KEY NOT NULL,
	"long_name_version" varchar NOT NULL,
	"typeform_registration_link" text NOT NULL,
	"pms" varchar NOT NULL,
	"meta_title" text NOT NULL,
	"meta_description" text NOT NULL,
	"slug" varchar NOT NULL,
	"website" varchar NOT NULL,
	"clinic_name" varchar NOT NULL,
	"display_on_web" varchar NOT NULL,
	"link_to_clinic_suburb_page" varchar NOT NULL,
	"full_address" text NOT NULL,
	"city" varchar NOT NULL,
	"suburb" varchar NOT NULL,
	"state" varchar NOT NULL,
	"postcode" varchar NOT NULL,
	"email" varchar NOT NULL,
	"phone" varchar NOT NULL,
	"nearby1_txt" varchar NOT NULL,
	"nearby1_link" varchar NOT NULL,
	"nearby2_txt" varchar NOT NULL,
	"nearby2_link" varchar NOT NULL,
	"nearby3_txt" varchar NOT NULL,
	"nearby3_link" varchar NOT NULL,
	"nearby4_txt" varchar NOT NULL,
	"nearby4_link" varchar NOT NULL,
	"about_clinic" text NOT NULL
);

DROP TABLE clinic;