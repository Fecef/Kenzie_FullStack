-- Aqui você deve colocar os códigos SQL referentes à

-- Criação das tabelas

-- Tabela clientes
CREATE TABLE IF NOT EXISTS clientes (
	id BIGSERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	lealdade INT NOT NULL
);

-- Tabela endereços
CREATE TABLE IF NOT EXISTS enderecos (
	id BIGSERIAL PRIMARY KEY,
	cep VARCHAR(9) NOT NULL,
	rua VARCHAR(50) NOT NULL,
	numero INT NOT NULL,
	bairro VARCHAR(50) NOT NULL,
	complemento VARCHAR(100),
	cliente_id INT UNIQUE NOT NULL,
	FOREIGN KEY (cliente_id) REFERENCES clientes (id) ON DELETE CASCADE 
);

-- Tabela pedidos
CREATE TABLE IF NOT EXISTS pedidos (
	id BIGSERIAL PRIMARY KEY,
	status VARCHAR(50) NOT NULL,
	cliente_id INT NOT NULL,
	FOREIGN KEY (cliente_id) REFERENCES clientes (id) ON DELETE CASCADE 
);

-- Tabela produtos
CREATE TABLE IF NOT EXISTS produtos (
	id BIGSERIAL PRIMARY KEY,
	nome VARCHAR(100) UNIQUE NOT NULL,
	tipo VARCHAR(30) NOT NULL,
	preco DECIMAL(8,2) NOT NULL,
	pts_de_lealdade INT NOT NULL
);

-- Tabela produtos_pedidos
CREATE TABLE IF NOT EXISTS produtos_pedidos (
	id BIGSERIAL PRIMARY KEY,
	pedido_id INT NOT NULL,
	produto_id INT NOT NULL,
	FOREIGN KEY (pedido_id) REFERENCES pedidos (id) ON DELETE CASCADE,
	FOREIGN KEY (produto_id) REFERENCES produtos (id) ON DELETE CASCADE
);