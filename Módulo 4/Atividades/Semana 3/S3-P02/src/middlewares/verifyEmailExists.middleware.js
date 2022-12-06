import { db_conf } from "../database";

const verifyEmailExistsMiddleware = async (req, res, next) => {
  const queryResponse = await db_conf
    .query("SELECT email FROM users;")

  const emailExist = queryResponse.rows.find(user => user.email === req.body.email);

  if (emailExist) {
    return res.status(409).json({ message: "Email already exist." })
  }

  return next();
};

export default verifyEmailExistsMiddleware;
