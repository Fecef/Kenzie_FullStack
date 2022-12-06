import { listUsersService } from "../services";

const listUsersController = async (req, res) => {
  const [status, data] = await listUsersService();

  return res.status(status).json(data);
};

export default listUsersController;
