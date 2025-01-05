CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
)

CREATE TABLE fields (
	id serial4 NOT NULL,
	title varchar(255) NOT NULL,
	data_type varchar(255) NOT NULL,
	created_by int4 NOT NULL,
	CONSTRAINT fields_pkey PRIMARY KEY (id),
	CONSTRAINT fields_users_fk FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE forms (
	id serial4 NOT NULL,
	title varchar(255) NOT NULL,
	created_by int4 NOT NULL,
	CONSTRAINT forms_pkey PRIMARY KEY (id),
	CONSTRAINT forms_users_fk FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE form_field_map (
	id serial4 NOT NULL,
	form_id int4 NOT NULL,
	field_id int4 NOT NULL,
	CONSTRAINT form_field_map_pkey PRIMARY KEY (id),
	CONSTRAINT form_field_map_fields_fk FOREIGN KEY (field_id) REFERENCES fields(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT form_field_map_forms_fk FOREIGN KEY (form_id) REFERENCES forms(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE responses (
	id serial4 NOT NULL,
	email varchar(255) NOT NULL,
	form_id int4 NOT NULL,
	"data" jsonb NULL,
	CONSTRAINT responses_pkey PRIMARY KEY (id),
	CONSTRAINT responses_forms_fk FOREIGN KEY (form_id) REFERENCES forms(id) ON DELETE CASCADE ON UPDATE CASCADE
);