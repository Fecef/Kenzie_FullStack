import express from "express";
import users from "./database";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

// Services
const createUserService = (email, name, birthDate) => {
  const userArealdyExists = users.find((user) => user.email === email);

  if (userArealdyExists) {
    return [409, { message: "This email address is already being used" }];
  }

  const newUser = {
    email,
    name,
    birthDate,
    id: uuidv4(),
  };

  users.push(newUser);

  return [201, newUser]
};

const listUsersService = () => {
  return users;
};

const deleteUserService = (id) => {
  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return [404, { message: "User not found" }];
  }

  users.splice(userIndex, 1);

  return [204];
}

// Controllers
const createUserController = (request, response) => {
  const { email, name, birthDate } = request.body;

  const [status, user] = createUserService(email, name, birthDate);

  return response.status(status).json(user);
};

const listUsersController = (request, response) => {
  const users = listUsersService();

  return response.json(users);
};

const deleteUserController = (request, response) => {
  const [status, data] = deleteUserService(request.params.id)

  return response.status(status).json(data);
};

export default deleteUserController;

app.post("/users", createUserController);
app.get("/users", listUsersController);
app.delete("/:id", deleteUserController);

app.listen(3000, () => console.log(`App is running on http://localhost:3000`));
