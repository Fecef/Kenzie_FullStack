-- Aqui você deve colocar os códigos SQL referentes às
-- Seleções de dados

-- 1)
SELECT * FROM pedidos pe
INNER JOIN produtos_pedidos prpe ON prpe.pedido_id = pe.id
INNER JOIN produtos pr ON pr.id = prpe.produto_id;

-- 2)
SELECT pedidos.id FROM pedidos
INNER JOIN produtos_pedidos ON pedidos.id = produtos_pedidos.pedido_id
INNER JOIN produtos ON produtos.id = produtos_pedidos.produto_id
WHERE nome = 'Fritas';

-- 3)
SELECT cl.nome gostam_de_fritas FROM clientes cl
INNER JOIN pedidos pe ON cl.id = pe.cliente_id
INNER JOIN produtos_pedidos prpe ON pe.id = prpe.pedido_id
INNER JOIN produtos pr ON prpe.produto_id = pr.id
WHERE pr.nome = 'Fritas';

-- 4)
SELECT SUM(pr.preco) FROM produtos pr
INNER JOIN produtos_pedidos prpe ON prpe.produto_id = pr.id
INNER JOIN pedidos pe ON pe.id = prpe.pedido_id
INNER JOIN clientes cl ON cl.id = pe.cliente_id
WHERE cl.nome = 'Laura';

-- 5)
SELECT pr.nome, COUNT(pr.id) FROM produtos pr
INNER JOIN produtos_pedidos prpe ON prpe.produto_id = pr.id
INNER JOIN pedidos pe ON pe.id = prpe.pedido_id 
GROUP BY pr.id ORDER BY pr.nome ASC;