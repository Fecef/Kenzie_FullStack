INSERT INTO
	users ("name", email)
VALUES
	('Fabio', 'fabio@kenzie.com.br'),
	('Cauan', 'cauan@kenzie.com.br'),
	('Jardel', 'jardel@kenzie.com.br'),
	('Felipe', 'felipe@kenzie.com.br'),
	('Luiz', 'luiz@kenzie.com.br'),
	('Pablo', 'pablo@kenzie.com.br'),
	('Maykel', 'maykel@kenzie.com.br')
RETURNING *;

INSERT INTO
	communities ("name", description)
VALUES
	('Comunidade 1', 'Comunidade de jogos'),
	('Comunidade 2', 'Comunidade de musica'),
	('Comunidade 3', 'Comunidade de academia'),
	('Comunidade 4', 'Comunidade de esportes'),
	('Comunidade 5', 'Comunidade de carros'),
	('Comunidade 6', 'Comunidade de motos'),
	('Comunidade 7', 'Comunidade de aviões')
RETURNING *;

INSERT INTO
	users_communities ("userId", "communityId")
VALUES
	((SELECT id FROM users WHERE email = 'fabio@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 1')),
	((SELECT id FROM users WHERE email = 'fabio@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 2')),
	((SELECT id FROM users WHERE email = 'fabio@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 3')),
	((SELECT id FROM users WHERE email = 'fabio@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 4')),
	((SELECT id FROM users WHERE email = 'fabio@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 5')),
	((SELECT id FROM users WHERE email = 'fabio@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 6')),
	((SELECT id FROM users WHERE email = 'fabio@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 7')),
	((SELECT id FROM users WHERE email = 'cauan@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 1')),
	((SELECT id FROM users WHERE email = 'cauan@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 2')),
	((SELECT id FROM users WHERE email = 'felipe@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 1')),
	((SELECT id FROM users WHERE email = 'felipe@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 3')),
	((SELECT id FROM users WHERE email = 'felipe@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 4')),
	((SELECT id FROM users WHERE email = 'pablo@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 2')),
	((SELECT id FROM users WHERE email = 'pablo@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 5')),
	((SELECT id FROM users WHERE email = 'pablo@kenzie.com.br'), (SELECT id FROM communities WHERE name = 'Comunidade 7'))
RETURNING *;