import { db_conf } from "../database";

const verifyCpfExistsMiddleware = async (req, res, next) => {
  const queryResponse = await db_conf
    .query("SELECT cpf FROM users;")

  const cpfExist = queryResponse.rows.find(user => user.cpf === req.body.cpf);

  if (cpfExist) {
    return res.status(409).json({ message: "CPF already exist." })
  }

  return next();
};

export default verifyCpfExistsMiddleware;
