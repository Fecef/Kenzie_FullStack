import { createUserService, listUsersService } from "../services";

const createUserController = async (req, res) => {
  const user = await createUserService(req.validatedBody);
  return res.status(201).json(user);
};
const listUsersController = async (req, res) => {
  const users = await listUsersService();
  return res.status(201).json(users);
};

export { createUserController, listUsersController };
