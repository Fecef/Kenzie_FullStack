import express from "express";
import users from "./database";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { compare, hash } from "bcryptjs";
import "dotenv/config";

const app = express();
app.use(express.json());

// MIDDLEWARES
function ensureAuthMiddleware(req, res, next) {
  let authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  authorization = authorization.split(" ")[1];

  return jwt.verify(authorization, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Missing authorization headers" });
    }

    req.user = { id: decoded.sub };

    return next();
  });
}

function ensureUserIsAdmMiddleware(req, res, next) {
  const user = users.find((user) => user.uuid === req.user.id);

  if (!user.isAdm) {
    return res.status(403).json({ message: "Missing admin permissions" });
  }

  return next();
}


function duplicateEmailMiddleware(req, res, next) {
  const duplicateEmail = users.find((user) => user.email === req.body.email);

  if (duplicateEmail) {
    return res.status(409).json({ message: "E-mail already registered." });
  }

  return next();
}

async function validateUserMiddleware(req, res, next) {
  const { email, password } = req.body;
  const userIndex = users.findIndex((user) => user.email === email);
  const passwordMatch = await compare(password, users[userIndex].password);

  if (userIndex === -1) {
    return res.status(401).json({ message: "Wrong email/password" });
  }

  if (!passwordMatch) {
    return res.status(401).json({ message: "Wrong email/password" });
  }

  req.body = { ...req.body, userIndex }

  return next();
}

function ensureNotAdm(req, res, next) {
  const userId = req.user.id;
  const paramId = req.params.id;
  const user = users.find((user) => user.uuid === userId);

  if (!user.isAdm && userId !== paramId) {
    return res.status(403).json({ message: "Missing admin permissions" });
  }

  return next();
}

function verifyIfAdmMiddleware(req, res, next) {
  const userId = req.user.id;
  const paramsId = req.params.id;
  const user = users.find((user) => user.uuid === userId);
  const userIndex = users.findIndex((user) => user.uuid === paramsId);

  if (!user.isAdm) {
    return res.status(403).json({ message: "Missing admin permissions" });
  }

  req.body = { userIndex }

  return next();
}

// SERVICES
async function createUserService({ name, email, password }) {
  const hashedPassword = { password: await hash(password, 10) }
  const user = {
    uuid: uuidv4(),
    name,
    email,
    createdOn: new Date(),
    updatedOn: new Date(),
    isAdm: true,
  };

  users.push({ ...user, ...hashedPassword });

  return [201, user];
}

async function userLoginService({ email, userIndex }) {
  const token = jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: users[userIndex].uuid,
  });

  return [200, { token }];
}

function listUsersService() {
  return [200, users];
}

function deleteUserService(userIndex) {
  users.splice(userIndex, 1);

  return [204];
}

function retrieveUserService(id) {
  const index = users.findIndex((user) => user.uuid === id);
  const user = {
    uuid: users[index].uuid,
    createdOn: users[index].createdOn,
    updatedOn: users[index].updatedOn,
    name: users[index].name,
    email: users[index].email,
    isAdm: users[index].isAdm,
  };

  return [200, user];
}

async function updateUserService(userData, id) {
  const userIndex = users.findIndex((user) => user.uuid === id);
  users[userIndex] = { ...users[userIndex], ...userData };

  const res = {
    uuid: users[userIndex].uuid,
    createdOn: users[userIndex].createdOn,
    updatedOn: users[userIndex].updatedOn,
    name: users[userIndex].name,
    email: users[userIndex].email,
    isAdm: users[userIndex].isAdm
  }

  return [200, res];
}


//  CONTROLLERS
async function createUserController(req, res) {
  const [status, user] = await createUserService(req.body);
  return res.status(status).json(user);
}

async function userLoginController(req, res) {
  const [status, token] = await userLoginService(req.body);
  return res.status(status).json(token);
}

function listUsersController(req, res) {
  const [status, users] = listUsersService();
  return res.status(status).json(users);
}

function deleteUserController(req, res) {
  const [status] = deleteUserService(req.body.userIndex);
  return res.status(status).json();
}

function retrieveUserController(req, res) {
  const [status, user] = retrieveUserService(req.user.id);
  return res.status(status).json(user);
}

async function updateUserController(req, res) {
  const [status, user] = await updateUserService(req.body, req.params.id);
  return res.status(status).json(user);
}

//  No Authorization
app.post("/users", duplicateEmailMiddleware, createUserController);
app.post("/login", validateUserMiddleware, userLoginController);

//  Need Authorization
app.get("/users", ensureAuthMiddleware, ensureUserIsAdmMiddleware, listUsersController);
app.get("/users/profile", ensureAuthMiddleware, retrieveUserController);
app.patch("/users/:id", ensureAuthMiddleware, ensureNotAdm, updateUserController);
app.delete("/users/:id", ensureAuthMiddleware, verifyIfAdmMiddleware, deleteUserController);

app.listen(3000, () => console.log(`App running on http://localhost:3000`));

export default app;
