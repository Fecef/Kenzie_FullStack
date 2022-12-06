import { createUserService } from "../services";

const createUserController = async (req, res) => {
  const [status, data] = await createUserService(req.body);

  return res.status(status).json(data);
};

export default createUserController;
