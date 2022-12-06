-- Aqui você deve colocar os códigos SQL referentes às
-- Simulações de um CRUD

-- Criação

-- 1)
INSERT INTO clientes
	(nome, lealdade)
VALUES
	('Georgia', 0);


-- 2)
INSERT INTO pedidos
	(status, cliente_id)
VALUES
	('Recebido', 6);


-- 3)
INSERT INTO produtos_pedidos
	(pedido_id, produto_id)
VALUES
	(6, 1),
	(6, 2),
	(6, 6),
	(6, 8),
	(6,8)


-- Leitura

-- 1)
SELECT * FROM clientes cl
INNER JOIN pedidos pe ON pe.cliente_id = cl.id
INNER JOIN produtos_pedidos prpe ON prpe.pedido_id = pe.id
INNER JOIN produtos pr ON pr.id = prpe.produto_id
WHERE cl.nome = 'Georgia';


-- Atualização

-- 1)
UPDATE clientes SET lealdade = 48 WHERE clientes.id = (SELECT id FROM clientes WHERE nome = 'Georgia') RETURNING *;


-- Deleção

-- 1)
DELETE FROM clientes WHERE nome = 'Marcelo' RETURNING *;
