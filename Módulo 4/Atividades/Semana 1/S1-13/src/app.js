import express from "express";
import { books, users } from "./database";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { compare, hash } from "bcryptjs";
import "dotenv/config";

const app = express();
app.use(express.json());

// MIDDLEWARES
function verifyDuplicateEmailMiddleware(req, res, next) {
  const { email } = req.body;
  const isDuplicate = users.find(user => user.email === email);

  if (isDuplicate) {
    return res.status(409).json({ message: "E-mail already registered." })
  }

  return next();
}

async function validateUserMiddleware(req, res, next) {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  const passwordMatch = await compare(password, user.password);

  if (!user) {
    return res.status(401).json({ message: "E-mail or password invalid." });
  }

  if (!passwordMatch) {
    return res.status(401).json({ message: "E-mail or password invalid." });
  }

  req.body = { email, password, userId: user.id, };

  return next();
}

function tokenAuthMiddleware(req, res, next) {
  let authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  authorization = authorization.split(" ")[1];

  return jwt.verify(authorization, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Missing authorization headers" });
    }

    req.body = { ...req.body, userId: decoded.sub };

    return next();
  });
}

function verifyDuplicateTitleMiddleware(req, res, next) {
  const duplicateTitle = books.find((book) => book.title === req.body.title);

  if (duplicateTitle) {
    return res.status(409).json({ message: "Book already exist." });
  }

  return next();
}

function ensureBookExistMiddleware(req, res, next) {
  const bookIndex = books.findIndex((book) => book.id = req.params.id);

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found." });
  }

  req.body = {
    bookIndex: bookIndex,
  };

  return next();
}

function getBookMiddleware(req, res, next) {
  const bookIndex = books.findIndex(book => book.uuid === req.params.id);

  if (bookIndex === -1) {
    return res.status(409).json({ message: "Book not found." });
  }

  req.body = { ...req.body, bookIndex }

  return next();
}

// SERVICES
async function createUserService(userData) {
  const user = {
    id: uuidv4(),
    ...userData,
    password: await hash(userData.password, 10),
  };

  users.push(user);

  return [201, user];
}

function userLoginService({ email, userId }) {
  const token = jwt.sign({ email }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: userId,
  });

  return [200, { token }];
}

function createBookService({ title, author, year, userId }) {
  const newBook = {
    title,
    author,
    year,
    uuid: uuidv4(),
    owner_id: userId,
  };

  books.push(newBook);

  return [200, newBook];
}

function listBooksService() {
  return books;
}

function deleteBookService(bookIndex) {
  books.splice(bookIndex, 1);

  return [204];
}

function updateBookService(data) {
  const book = books[data.bookIndex] = { ...data };

  return [201, book]
}

// CONTROLLER
async function createUserController(req, res) {
  const [status, user] = await createUserService(req.body);
  return res.status(status).json(user);
}

async function userLoginController(req, res) {
  const [status, token] = userLoginService(req.body);
  return res.status(status).json(token);
}

function createBookController(req, res) {
  const [status, book] = createBookService(req.body);
  return res.status(status).json(book);
}

function listBooksController(req, res) {
  const books = listBooksService();
  return res.json(books);
}

function deleteBookController(req, res) {
  const status = deleteBookService(req.body.bookIndex);
  return res.status(status).json();
}

function updateBookController(req, res) {
  const [status, book] = updateBookService(req.body);
  return res.status(status).json(book)
}

app.post("/register", verifyDuplicateEmailMiddleware, createUserController);
app.post("/login", validateUserMiddleware, userLoginController);

app.post("/books", verifyDuplicateTitleMiddleware, tokenAuthMiddleware, createBookController);
app.get("/books", tokenAuthMiddleware, listBooksController);
app.patch("/books/:id", tokenAuthMiddleware, getBookMiddleware, updateBookController)
app.delete("/books/:id", tokenAuthMiddleware, ensureBookExistMiddleware, deleteBookController);

app.listen(3000, () => console.log(`App rodando em http://localhost:3000`));

export default app;
