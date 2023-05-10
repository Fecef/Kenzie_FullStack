# Kenzie Kars API RESTful

Está [API](https://aws.amazon.com/pt/what-is/api/) oferece uma série de recursos voltados para a construção de um sistema de **e-commerce** com foco em anúncio de venda de carros.

---

# Instalação

### Pré-requisitos

- Ter [PostgreSQL](https://www.postgresql.org/) instalado.
- Ter [Node.js](https://nodejs.org/en/download) instalado.
- (opcional) Ter [VS Code](https://code.visualstudio.com/download) instalado
- Criar um arquivo **.env** conforme orientações do **.env.example**

### Passo-a-passo

1. Instalar as dependências.

```
npm install
```

2. Executar as [migrations](https://juniorb2s.medium.com/migrations-o-porque-e-como-usar-12d98c6d9269).

```
npx prisma migrate dev
```

3. (opicional) Execeutar o seed de dados.

```
npm run seed
```

4. Rodar o servidor local.

```
npm run dev
```

---

# Endpoints da API

### Índice

- [Login](#1-login)
  - [POST - /login](#11-login-do-usuário)
- [Users](#2-users)
  - [POST - /users](#21-criação-de-usuário)
  - [GET - /users/{user_id}](#22-busca-de-usuário-pelo-id)
  - [GET - /users/profile](#231-busca-os-dados-do-usuário-logado)
  - [PATCH - /users/profile](#232-atualiza-os-dados-do-usuário-logado)
  - [DELETE - /users/profile](#233-deleta-o-usuário-logado)
  - [PATCH - /users/profile/address](#24-atualiza-os-dados-de-endereço-do-usuário-logado)
  - [POST - /users/resetPassword](#25-envia-mensagem-de-email-para-redefinição-de-senha)
  - [PATCH - /users/resetPassword/{user_token}](#26-redefine-a-senha-usuário)
- [Announcements](#3-announcements)
  - [POST - /announcements](#311-criação-de-anúncio)
  - [GET - /announcements](#312-listagem-dos-anúncios)
  - [GET - /announcements/{announcement_id}](#321-lista-o-anúncio-por-id)
  - [PATCH - /announcements/{announcement_id}](#331-atualização-de-anúncio)
  - [DELETE - /announcements/{announcement_id}](#332-deleção-de-anúncio)
- [Comments](#2-users)
  - [POST - /comments/announcement/{announcement_id}](#41-adição-de-comentário)
  - [PATCH - /comments/announcement/{announcement_id}](#42-adição-de-comentário)
  - [DELETE - /comments/announcement/{announcement_id}](#43-adição-de-comentário)

---

## 1. **Login**

### 1.1. **Login do Usuário**

### `/login`

### Exemplo de Request:

```
POST /login
Host: http://localhost:3002
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "exemplo@gmail.com",
  "password": "senha123"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NTk3MTYsImV4cCI6MTY3OTk0NjExNiwic3ViIjoiMGJiYTc5MDUtODFkNi00ZGE5LTlmOTMtYmI3OGYxY2ZlNThiIn0.kVt4W_8ASeIhEwcyVtereLZ2J1oNm0nEhWMzo8vke3E"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                |
| -------------- | ------------------------ |
| 403 Forbidden  | User or password invalid |

---

## 2. **Users**

O objeto **User** é definido como:

| Campo       | Tipo   | Descrição                                     |
| ----------- | ------ | --------------------------------------------- |
| id          | string | Identificador único do usuário                |
| name        | string | O nome do usuário.                            |
| email       | string | O e-mail do usuário. (Único)                  |
| cpf         | string | O CPF do usuário. (Único)                     |
| phone       | string | O telefone do usuário.                        |
| birthdate   | date   | A data de nascimento do usuário               |
| description | string | Descrição do usuário (opcional)               |
| password    | string | A senha de acesso do usuário                  |
| accountType | string | Tipo da conta. (Padrão: comprador )           |
| avatar      | string | Url da imagem do usuário (opcional)           |
| updatedAt   | date   | Data em que o usuário foi atualizado          |
| createdAt   | date   | Data em que o usuário foi criado              |
| address     | object | Um objeto contento as informações de endereço |

O objeto **Address** é definido como:

| Campo      | Tipo   | Descrição                                 |
| ---------- | ------ | ----------------------------------------- |
| id         | string | Identificador único do endereço           |
| street     | string | O nome da rua do usuário.                 |
| number     | date   | O número do endereço do usuário           |
| complement | string | Complemeto do endereço usuário (opcional) |
| city       | string | A cidade do usuário                       |
| state      | string | O estado do usuário                       |
| zipCode    | string | O CEP do usuário                          |

### Endpoints

| Método | Rota                   | Descrição                             |
| ------ | ---------------------- | ------------------------------------- |
| POST   | /users                 | Cria um usuário.                      |
| GET    | /users/{user_id}       | Busca os dados usuário pelo ID        |
| GET    | /users/profile         | Busca os dados do usuário logado      |
| PATCH  | /users/profile         | Atualiza dados do usuário logado      |
| DELETE | /users/profile         | Deleta conta do usuário logado        |
| PATCH  | /users/profile/address | Atualiza endereço do usuário logado   |
| POST   | /users/resetPassword   | Envia email para redefinição de senha |
| PATCH  | /users/resetPassword   | Refine a senha do usuário logado      |

---

### `/users`

### 2.1. **Criação de Usuário**

### Exemplo de Request:

```

POST /users
Host: http://localhost:3001
Authorization: None
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "name": "nome",
  "email": "email@gmail.com",
  "cpf": "000.000.000-00",
  "phone": "(00) 0000-0000",
  "birthdate": "1990-05-20T00:00:00.000Z",
  "description": "descrição",
  "password": "1234",
  "accountType": "seller",
  "avatar": "http://foto",
  "address": {
    "street": "Rua 1",
    "number": "20",
    "city": "Cidade",
    "state": "SP",
    "zipCode": "17000-000"
  }
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "f76dce92-b102-430f-9707-fc8f6397b82c",
  "name": "nome",
  "email": "email@gmail.com",
  "cpf": "000.000.000-00",
  "phone": "(00) 0000-0000",
  "birthdate": "1990-05-20T00:00:00.000Z",
  "description": "descrição",
  "accountType": "seller",
  "avatar": "http://foto",
  "address": {
    "id": "f925dd9c-b926-4e3f-97ba-ef9fc1c160a3",
    "street": "Rua 1",
    "number": "20",
    "complement": null,
    "city": "Cidade",
    "state": "SP",
    "zipCode": "17000-000"
  }
}
```

### Possíveis Erros:

| Cód. | Descrição            |
| ---- | -------------------- |
| 409  | CPF Already Exists.  |
| 409  | Email Already Exists |

### `/users/{user_id}`

### 2.2. **Busca de usuário pelo ID**

### Exemplo de Request:

```
GET /users/9364545b-2e95-4030-bcc9-d16cf79e18aa
Host: http://localhost:3001
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

Não possui.

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "9364545b-2e95-4030-bcc9-d16cf79e18aa",
  "name": "Felipe",
  "email": "fecef@gmail.com",
  "cpf": "123.456.789-11",
  "phone": "(11) 94949-9789",
  "birthdate": "1992-12-21T00:00:00.000Z",
  "description": "Procuro carros baratos.",
  "accountType": "seller",
  "avatar": null,
  "address": {
    "id": "2049a4fb-ec0f-4aef-99bb-8c48bd5ced11",
    "street": "Avenida Meriti",
    "number": "1326",
    "complement": "",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "zipCode": "21211.006"
  },
  "comments": [],
  "announcements": [
    {
      "userId": "9364545b-2e95-4030-bcc9-d16cf79e18aa",
      "updatedAt": "2023-05-03T14:29:11.054Z",
      "createdAt": "2023-05-03T14:29:11.054Z",
      "isGoodBuy": false,
      "isActive": true,
      "description": "Uma descrição",
      "banner": "https://t.ctcdn.com.br/--yE7KGkqDb3mTIHj8Uzj5Ra8ds=/720x405/smart/filters:format(webp)/i523842.jpeg",
      "color": "Azul",
      "fuelType": "Flex",
      "priceFipe": 92650,
      "price": 213132,
      "mileage": 21321,
      "year": 2020,
      "model": "kicks special ed.1.6 16v flex 5p mec.",
      "brand": "nissan",
      "id": "8d596e8d-2441-48f1-b82b-5322f581a6d0"
    }
  ]
}
```

### Possíveis Erros:

| Cód. | Descrição       |
| ---- | --------------- |
| 409  | User Not Exist. |

### `/users/profile`

### 2.3.1. **Busca os dados do usuário logado**

### Exemplo de Request:

```
GET /users/profile
Host: http://localhost:3001
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

Não possui.

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "9364545b-2e95-4030-bcc9-d16cf79e18aa",
  "name": "Felipe",
  "email": "fecef@gmail.com",
  "cpf": "123.456.789-11",
  "phone": "(11) 94949-9789",
  "birthdate": "1992-12-21T00:00:00.000Z",
  "description": "Procuro carros baratos.",
  "accountType": "seller",
  "avatar": null,
  "address": {
    "id": "2049a4fb-ec0f-4aef-99bb-8c48bd5ced11",
    "street": "Avenida Meriti",
    "number": "1326",
    "complement": "",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "zipCode": "21211.006"
  },
  "comments": [],
  "announcements": [
    {
      "userId": "9364545b-2e95-4030-bcc9-d16cf79e18aa",
      "updatedAt": "2023-05-03T14:29:11.054Z",
      "createdAt": "2023-05-03T14:29:11.054Z",
      "isGoodBuy": false,
      "isActive": true,
      "description": "Uma descrição",
      "banner": "https://t.ctcdn.com.br/--yE7KGkqDb3mTIHj8Uzj5Ra8ds=/720x405/smart/filters:format(webp)/i523842.jpeg",
      "color": "Azul",
      "fuelType": "Flex",
      "priceFipe": 92650,
      "price": 213132,
      "mileage": 21321,
      "year": 2020,
      "model": "kicks special ed.1.6 16v flex 5p mec.",
      "brand": "nissan",
      "id": "8d596e8d-2441-48f1-b82b-5322f581a6d0"
    }
  ]
}
```

### Possíveis Erros:

| Cód. | Descrição     |
| ---- | ------------- |
| 401  | missing token |

### 2.3.2. **Atualiza os dados do usuário logado**

### Exemplo de Request:

```
PATCH /users/profile
Host: http://localhost:3001
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "name": "Felipe César",
  "email": "felipe@gmail.com"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "9364545b-2e95-4030-bcc9-d16cf79e18aa",
  "name": "Felipe César",
  "email": "felipe@gmail.com",
  "cpf": "123.456.789-11",
  "phone": "(11) 94949-9789",
  "birthdate": "1992-12-21T00:00:00.000Z",
  "description": "Procuro carros baratos.",
  "accountType": "seller",
  "avatar": null,
  "address": {
    "id": "2049a4fb-ec0f-4aef-99bb-8c48bd5ced11",
    "street": "Avenida Meriti",
    "number": "1326",
    "complement": "",
    "city": "Rio de Janeiro",
    "state": "RJ",
    "zipCode": "21211.006"
  },
  ...
}
```

### 2.3.3. **Deleta o usuário logado**

### Exemplo de Request:

```
DELETE /users/profile
Host: http://localhost:3001
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

Não possui.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Cód. | Descrição     |
| ---- | ------------- |
| 401  | missing token |

### `/users/profile/address`

### 2.4. **Atualiza os dados de endereço do usuário logado**

### Exemplo de Request:

```
PATCH /users/profile/address
Host: http://localhost:3001
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "street": "Rua Alameda da Vitória"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "2049a4fb-ec0f-4aef-99bb-8c48bd5ced11",
  "street": "Rua Alameda da Vitória",
  "number": "1326",
  "complement": "",
  "city": "Rio de Janeiro",
  "state": "RJ",
  "zipCode": "21211.006"
}
```

| Cód. | Descrição     |
| ---- | ------------- |
| 401  | missing token |

### `/users/resetPassword`

### 2.5. **Envia mensagem de email para redefinição de senha.**

### Exemplo de Request:

```
POST /users/resetPassword
Host: http://localhost:3001
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "email": "felipe@gmail.com"
}
```

### Exemplo de Response:

```
201 OK
```

```json
{
  "message": "Email successfully sent!"
}
```

| Cód. | Descrição      |
| ---- | -------------- |
| 404  | User not found |

### `/users/resetPassword{reset_token}`

### 2.6. **Redefine a senha usuário.**

### Exemplo de Request:

```
PATCH /users/resetPassword/f33fb587-4956-4655-887a-c098f0b76a2f
Host: http://localhost:3001
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "password": "f32165498!"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Password changed successfully!"
}
```

| Cód. | Descrição      |
| ---- | -------------- |
| 404  | User not found |

---

## 3. **Announcements**

O objeto Announcement é definido como:

| Campo       | Tipo    | Descrição                                           |
| ----------- | ------- | --------------------------------------------------- |
| id          | string  | Identificador único do anúncio.                     |
| brand       | string  | A marca do carro anunciado.                         |
| model       | string  | O modelo do carro anunciado.                        |
| year        | int     | O ano do carro.                                     |
| mileage     | int     | O quilometragem do carro.                           |
| price       | decimal | O preço do carro.                                   |
| priceFipe   | decimal | O preço do carro na tabela fipe.                    |
| fuelType    | string  | O tipo de combustivel                               |
| color       | string  | A cor do carro                                      |
| banner      | string  | A imagem de capa do anúncio                         |
| description | string  | Descrição do anúncio.                               |
| isActive    | boolean | O anúncio está ativo. (Padrão: true )               |
| isGoodBuy   | boolean | É uma boa compra (Padrão: false )                   |
| updatedAt   | date    | Data em que o anúncio foi atualizado.               |
| createdAt   | date    | Data em que o anúncio foi criado.                   |
| userId      | string  | Identificador único do usuário que criou o anúncio. |
| images      | array   | Lista com imagens relacionadas ao anúncio.          |
| comments    | array   | Lista com comentários relacionadas ao anúncio.      |

O objeto Image é definido como:

| Campo          | Tipo   | Descrição                                             |
| -------------- | ------ | ----------------------------------------------------- |
| id             | string | Identificador único da imagem relacionada ao anúncio. |
| imgUrl         | string | URL da imagem relacionada ao anúncio.                 |
| announcementId | string | Identificador único do anúncio relacionado            |

O objeto Comment é definido como:

| Campo          | Tipo   | Descrição                                                 |
| -------------- | ------ | --------------------------------------------------------- |
| id             | string | Identificador único do comentario relacionado ao anúncio. |
| comment        | string | O comentario relacionado ao anúncio                       |
| userId         | string | Identificador único do usuário relacionado ao comentário  |
| announcementId | string | Identificador único do anúncio relacionado                |
| updatedAt      | date   | Data em que o comentário foi atualizado.                  |
| createdAt      | date   | Data em que o comentário foi criado.                      |

### Endpoints

| Método | Rota                             | Descrição                  |
| ------ | -------------------------------- | -------------------------- |
| POST   | /announcements                   | Criação de um anúncio.     |
| GET    | /announcements                   | Lista todos os anúncios    |
| GET    | /announcements/{announcement_id} | Pega o anúncio por id.     |
| PATCH  | /announcements/{announcement_id} | Atualiza o anúncio por id. |
| DELETE | /announcements/{announcement_id} | Deleta o anúncio por id.   |

---

### `/announcements`

### 3.1.1 **Criação de Anúncio**

### Exemplo de Request:

```
POST /announcements
Host: http://localhost:3001
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "brand": "Fiat",
  "model": "Mobi",
  "year": 2019,
  "mileage": 20000,
  "color": "preto",
  "price": 32000,
  "priceFipe": 27500,
  "fuelType": "flex",
  "description": "Carro em bom estado de conservação.",
  "banner": "http://example.com",
  "images": [
    {
      "imgUrl": "http://example2.com"
    }
  ]
}
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "f49216df-a607-4cdb-9058-101fe05cfc7b",
  "brand": "Fiat",
  "model": "Mobi",
  "year": 2019,
  "mileage": 20000,
  "price": "32000",
  "priceFipe": "27500",
  "fuelType": "flex",
  "color": "preto",
  "banner": "http://example.com",
  "description": "Carro em bom estado de conservação.",
  "isActive": true,
  "isGoodBuy": false,
  "createdAt": "2023-04-20T16:27:40.568Z",
  "updatedAt": "2023-04-20T16:27:40.568Z",
  "userId": "281ddb25-e210-40f3-8a5f-66f8adf2e6d2",
  "images": [
    {
      "id": "d0b765ea-404b-4779-9e0a-95791bb5529e",
      "imgUrl": "http://example2.com",
      "announcementId": "f49216df-a607-4cdb-9058-101fe05cfc7b"
    }
  ],
  "comments": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                                              |
| ---------------- | ------------------------------------------------------ |
| 401 Unauthorized | Missing token.                                         |
| 401 Unauthorized | Invalid token.                                         |
| 403 Forbidden    | Only sellers are allowed to perform this action.       |
| 400 Bad Request  | The data sent in the request is invalid or incomplete. |

### 3.1.2. **Listagem dos Anúncios**

### Exemplo de Request:

```
GET /announcements
Host: http://localhost:3001
Authorization: None
Content-type: application/json
```

Permitido o envio dos seguintes parâmetros:

| Código do Erro | Descrição                                   |
| -------------- | ------------------------------------------- |
| `brand`        | Filtra de acordo com a marca.               |
| `model`        | Filtra de acordo com o modelo.              |
| `color`        | Filtra de acordo com a cor.                 |
| `year`         | Filtra de acordo com o ano.                 |
| `fuelType`     | Filtra de acordo com o tipo de combustível. |

### Corpo da Requisição:

Não possui

### Exemplo de Response:

```
200 OK
```

```json
[
  {
		"id": "42d495d6-9acd-4496-95c3-4982cd7595e3",
		"banner": "https://example.com/image6.jpg",
		"brand": "Fiat",
		"color": "Red",
		"comments": [],
		"createdAt": "2023-05-02T14:36:02.046Z",
		"description": "A small and economic car",
		"fuelType": "Gasoline",
		"images": [],
		"isActive": true,
		"isGoodBuy": true,
		"mileage": 80000,
		"model": "Uno",
		"price": "15000",
		"priceFipe": "13000",
		"updatedAt": "2023-05-02T14:36:02.046Z",
		"year": 2012,
		"user": {
			"id": "7278211b-e6d4-411e-99b3-15bc2144b181",
			"name": "Pedro",
			"email": "pedro@gmail.com",
			"cpf": "123.456.789-00",
			"accountType": "advertiser",
			"birthdate": "1998-09-20T00:00:00.000Z",
			"description": null,
			"phone": "(11) 98128-8890",
			"createdAt": "2023-05-02T14:36:02.030Z",
			"updatedAt": "2023-05-02T14:36:02.030Z",
			"address": null
		}
	},,
  {
		"id": "81e65b18-4a7d-4d50-89ed-b434a393773f",
		"banner": "https://example.com/image3.jpg",
		"brand": "Volkswagen",
		"color": "Black",
		"comments": [],
		"createdAt": "2023-05-02T14:36:02.041Z",
		"description": "A simple car with low maintenance costs",
		"fuelType": "Gasoline",
		"images": [],
		"isActive": true,
		"isGoodBuy": true,
		"mileage": 90000,
		"model": "Gol",
		"price": "25000",
		"priceFipe": "22000",
		"updatedAt": "2023-05-02T14:36:02.041Z",
		"year": 2015,
		"user": {
			"id": "8ce54ed0-312c-47c8-8a02-d18bdd7c4e83",
			"name": "Gabriela",
			"email": "gabriela@gmail.com",
			"cpf": "789.123.456-00",
			"accountType": "advertiser",
			"birthdate": "1994-05-08T00:00:00.000Z",
			"description": null,
			"phone": "(21) 96459-9179",
			"createdAt": "2023-05-02T14:36:02.026Z",
			"updatedAt": "2023-05-02T14:36:02.026Z",
			"address": null
		}
	},
  ...
]
```

### `/announcements/{announcement_id}`

### 3.2.1 **Lista o anúncio por ID**

### Exemplo de Request:

```
POST /announcements/291e3157-a3d0-410c-8950-dca80fdb0ce
Host: http://localhost:3001
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "brand": "Fiat",
  "model": "Mobi",
  "year": 2019,
  "mileage": 20000,
  "color": "preto",
  "price": 32000,
  "priceFipe": 27500,
  "fuelType": "flex",
  "description": "Carro em bom estado de conservação.",
  "banner": "http://example.com",
  "images": [
    {
      "imgUrl": "http://example2.com"
    }
  ]
}
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "f49216df-a607-4cdb-9058-101fe05cfc7b",
  "brand": "Fiat",
  "model": "Mobi",
  "year": 2019,
  "mileage": 20000,
  "price": "32000",
  "priceFipe": "27500",
  "fuelType": "flex",
  "color": "preto",
  "banner": "http://example.com",
  "description": "Carro em bom estado de conservação.",
  "isActive": true,
  "isGoodBuy": false,
  "createdAt": "2023-04-20T16:27:40.568Z",
  "updatedAt": "2023-04-20T16:27:40.568Z",
  "userId": "281ddb25-e210-40f3-8a5f-66f8adf2e6d2",
  "images": [
    {
      "id": "d0b765ea-404b-4779-9e0a-95791bb5529e",
      "imgUrl": "http://example2.com",
      "announcementId": "f49216df-a607-4cdb-9058-101fe05cfc7b"
    }
  ],
  "comments": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                                              |
| ---------------- | ------------------------------------------------------ |
| 401 Unauthorized | Missing token.                                         |
| 401 Unauthorized | Invalid token.                                         |
| 403 Forbidden    | Only sellers are allowed to perform this action.       |
| 400 Bad Request  | The data sent in the request is invalid or incomplete. |

### 3.3.1 **Atualização de Anúncio**

### Exemplo de Request:

```
PATCH /announcements/7802c42b-bd42-4f34-b6bd-931c5fde6248
Host: http://localhost:3001
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "brand": "Volks",
  "model": "Fusca"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "7802c42b-bd42-4f34-b6bd-931c5fde6248",
  "brand": "Volks",
  "model": "Fusca",
  "year": 2021,
  "mileage": 20000,
  "price": "60000",
  "priceFipe": "55000",
  "fuelType": "flex",
  "color": "prata",
  "banner": "https://1.bp.blogspot.com/-FfOXtzYe2Io/XeG9_DvRdcI/AAAAAAAAZU8/m9oWWOB5OAESmAsn1ruhVOnaiQDQqGV9QCLcBGAsYHQ/s1600/Novo-Onix-Hatch-2020%2B%2528116%2529.jpg",
  "description": "Carro com baixa quilometragem e em ótimo estado de conservação. Possui câmera de ré e central multimídia.",
  "isActive": true,
  "isGoodBuy": false,
  "createdAt": "2023-05-04T19:00:18.597Z",
  "updatedAt": "2023-05-04T19:00:18.597Z",
  "userId": "9364545b-2e95-4030-bcc9-d16cf79e18aa"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição             |
| --------------- | --------------------- |
| 400 Bad Request | Annoucement Not Exist |

### 3.3.2 **Deleção de Anúncio**

### Exemplo de Request:

```
DELETE /announcements/7802c42b-bd42-4f34-b6bd-931c5fde6248
Host: http://localhost:3001
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

Não possui.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro  | Descrição     |
| --------------- | ------------- |
| 401 Bad Request | missing token |

---

### `/comments/announcement/{announcement_id}`

### 4 **Adição de Comentário**

### Exemplo de Request:

```
POST /comments/announcement/291e3157-a3d0-410c-8950-dca80fd7b0ce
Host: http://localhost:3001
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "comment": "Gostei do carro!"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "44452b24-e23a-42b6-8f09-5399127ff90f",
  "comment": "Gostei do carro",
  "createdAt": "2023-05-04T21:07:33.237Z",
  "updatedAt": "2023-05-04T21:07:33.237Z",
  "announcementId": "291e3157-a3d0-410c-8950-dca80fd7b0ce",
  "userId": "ed724322-bbbc-4077-8489-307279e6e52d",
  "user": {
    "name": "Felipe César",
    "avatar": "http://foto"
  }
}
```

### Possíveis Erros:

| Cód. | Descrição               |
| ---- | ----------------------- |
| 404  | Announcement not found. |
| 401  | "missing token          |

### `/comments/{announcement_id}`

### 5.1 **Atualização de Comentário**

### Exemplo de Request:

```
PATCH /comments/291e3157-a3d0-410c-8950-dca80fd7b0ce
Host: http://localhost:3001
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "comment": "Como posso entrar em contato?"
}
```

### Exemplo de Response:

```
200 Accepted
```

```json
{
  "id": "291e3157-a3d0-410c-8950-dca80fd7b0ce",
  "comment": "Como posso entrar em contato?",
  "createdAt": "2023-05-04T21:07:33.237Z",
  "updatedAt": "2023-05-04T21:07:33.237Z",
  "announcementId": "291e3157-a3d0-410c-8950-dca80fd7b0ce",
  "userId": "ed724322-bbbc-4077-8489-307279e6e52d",
  "user": {
    "name": "Felipe César",
    "avatar": "http://foto"
  }
}
```

### Possíveis Erros:

| Cód. | Descrição           |
| ---- | ------------------- |
| 401  | "missing token "    |
| 401  | "Comment not found" |

### 5.2 **Deleção de Comentário**

### Exemplo de Request:

```
DELETE /comments/291e3157-a3d0-410c-8950-dca80fd7b0ce
Host: http://localhost:3001
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

Não possui.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Cód. | Descrição           |
| ---- | ------------------- |
| 401  | "missing token "    |
| 401  | "Comment not found" |

```

```
