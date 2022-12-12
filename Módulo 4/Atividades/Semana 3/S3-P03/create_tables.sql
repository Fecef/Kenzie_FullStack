DROP DATABASE IF EXISTS "products_management";
DROP DATABASE IF EXISTS "tests_products";

CREATE DATABASE  "products_management";
CREATE DATABASE  "tests_products";

\c products_management;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE categories (
	"id" BIGSERIAL PRIMARY KEY,
	"name" VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE products (
	"id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	"name" VARCHAR(200) NOT NULL,
	"price" DECIMAL(8,2) NOT NULL,
	"category_id" INT,
	FOREIGN KEY ("category_id") REFERENCES categories ("id") ON DELETE CASCADE
);

INSERT INTO categories
	("name")
VALUES
	('Bebidas');