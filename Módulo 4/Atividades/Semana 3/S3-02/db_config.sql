-- db_config.sql
-- criando a database
CREATE DATABASE users_db;

-- conectando ao banco de dados
\c users_db;

-- criando a tabela users
CREATE TABLE users (
  "id" BIGSERIAL PRIMARY KEY,
  "name" VARCHAR(200) not null,
  "cpf" VARCHAR(11) not null unique,
  "password" varchar(256) not null
);

-- inserindo dados iniciais
INSERT INTO
  users ("name", "cpf", "password")
VALUES
  ('Fabio Jr.', '01234567899', 'fabiosenior'),
  ('Cauan F.', '99876543210', 'listcomprehensionlover'),
  ('Jardel L.', '87654321901', 'htmlcssdom>nodejs');
