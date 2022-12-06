DROP DATABASE IF EXISTS "atv_adicionando_yup";

CREATE DATABASE "atv_adicionando_yup";

\c atv_adicionando_yup;

CREATE TABLE users (
    "id" BIGSERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(50) UNIQUE NOT NULL,
    "age" INTEGER,
    "cpf" VARCHAR(11) UNIQUE NOT NULL
);

INSERT INTO
    users ("name", "email", "age", "cpf")
VALUES
    ('Fabio Jr.', 'fabio@mail.co', 44, '12345678910'),
    ('Felipe R.', 'felipe@mail.co', 55, '12345678911'),
    ('Maykel N.', 'maykel@mail.co', 66, '12345678912');