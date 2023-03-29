## INSTALAÇÃO
```
yarn dev
```
## EXECUTAR MIGRAÇÕES
```
npm run typeorm migration:run -- -d ./src/data-source
```
## Base URL
http://localhost:3001
## ROTAS SEM PROTEÇÃO

### POST - /user

Cadastro de usuário

Request:

```js
{
	"email": "meuemail@gmail.com",
	"password": "1234"
}
```

Response:

```js
{
	"token": "eyJhbGciOiJIUzI1NiIsI...",
	"userId": "42897a43-8bd9-46fa-a71e-35bbe4d9e8fd"
}
```

### POST - /login

Login de usuário.

Request:

```js
{
	"email": "usuario1@gmail.com",
	"password": "1234"
}
```

Response:

```js
{
	"id": "d7156767-b2e3-4813-b176-69ebd3c6400b",
	"name": "Usuário1",
	"email": "usuario1@gmail.com",
	"phone": "1194451621",
	"isActive": true,
	"createdAt": "2023-03-28T01:14:51.791Z"
}
```

### GET - /user

Listar todos os usuários.

Request:

NO BODY

Response:

```js
[
  {
    id: "9f0fbd19-029f-4cdf-ac3e-7e4e558e83ac",
    name: "Usuário1",
    email: "usuario1@gmail.com",
    phone: "1194451621",
    isActive: true,
    createdAt: "2023-03-27T21:25:47.193Z",
  },
  {
    id: "1ed8cf59-98d9-47d5-b50a-112d2db6083d",
    name: "Usuário2",
    email: "usuario2gmail.com",
    phone: "231321321",
    isActive: false,
    createdAt: "2023-03-27T22:21:57.555Z",
  },
  {
    id: "498bbfbd-0652-44ec-97f3-5ab109b2921c",
    name: "Usuário3",
    email: "usuario3@mail.com",
    phone: "213132132",
    isActive: false,
    createdAt: "2023-03-27T22:27:00.267Z",
  },
];
```

---

## ROTAS PROTEGIDAS - Usuário

### GET - /user/retrieve

Lista apenas o usuário logado.

Request:

NO BODY

Response:

```js
{
	"id": "9f0fbd19-029f-4cdf-ac3e-7e4e558e83ac",
	"name": "Usuário1",
	"email": "usuario1@gmail.com",
	"phone": "1194451621",
	"isActive": true,
	"createdAt": "2023-03-27T21:25:47.193Z"
}
```
### PATCH - /user

Atualiza os dados do usuário logado.

### OPTIONALS FIELDS
```js
{"name", "email", "password", "phone"}
```

Request:

```js
{
	"email": "meunovoemail@gmail.com",
	"password": "4321"
}
```

Response:

```js
{
	"id": "d7156767-b2e3-4813-b176-69ebd3c6400b",
	"name": "Usuário1",
	"email": "meunovoemail@gmail.com",
	"phone": "1194451621",
	"isActive": true,
	"createdAt": "2023-03-28T01:14:51.791Z"
}
```
### DELETE - /user

Altera o campo de **isActive** do usuário logado, para **false**.


Request:

NO BODY

Response:

NO RESPONSE

---
## ROTAS PROTEGIDAS - Contatos
### POST - /user/contact

Adiciona um contato na lista de contatos do usuário logado.

Request:

```js
{
	"name": "Contato1",
	"email": "contato1@gmail.com",
	"phone": "1194454517"
}
```

Response:

```js
{
	"id": "d7156767-b2e3-4813-b176-69ebd3c6400b",
	"name": "Contato1",
	"email": "contato1@gmail.com",
	"phone": "1194454517",
	"createdAt": "2023-03-28T01:14:51.791Z"
}
```

### GET - /user/contact

Lista todos os contatos do usuário logado.

Request:

NO BODY

Response:

```js
[
	{
		"id": "5b3d8476-5200-41bb-a23d-5becb12a19b9",
		"name": "Contato1",
		"email": "contato1@gmail.com",
		"phone": "1194454517",
		"createdAt": "2023-03-28T00:09:16.535Z"
	},
	{
		"id": "5b3d8476-5200-41bb-a23d-5becb12a19b9",
		"name": "Contato2",
		"email": "contato2@gmail.com",
		"phone": "1194454517",
		"createdAt": "2023-03-28T00:09:16.535Z"
	},
	{
		"id": "5b3d8476-5200-41bb-a23d-5becb12a19b9",
		"name": "Contato3",
		"email": "contato3@gmail.com",
		"phone": "1194454517",
		"createdAt": "2023-03-28T00:09:16.535Z"
	}
]
```

### GET - /user/contact/:contactId

Lista um único contato do usuário logado.

Request:

NO BODY

Response:

```js
{
	"id": "5b3d8476-5200-41bb-a23d-5becb12a19b9",
	"name": "Contato1",
	"email": "contato1@gmail.com",
	"phone": "1194454517",
	"createdAt": "2023-03-28T00:09:16.535Z"
}

```

### PATCH - /user/contact/:contactId

Atualiza os dados de um contato do usuário logado.

### OPTIONALS FIELDS
```js
{"name", "email", "phone"}
```

Request:

```js
{
	"name": "Contato13",
}
```

Response:

```js
{
	"id": "d7156767-b2e3-4813-b176-69ebd3c6400b",
	"name": "Contato13",
	"email": "contato1@gmail.com",
	"phone": "1194451621",
	"createdAt": "2023-03-28T01:14:51.791Z"
}
```

### DELETE - /user/contact/:contactId

Remove o contato da lista de contatos do usuário logado.

Request:

NO BODY

Response:

NO RESPONSE