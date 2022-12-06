import { db_conf } from "../database";

const createUserService = async (payload) => {
  const [queryResponse] = await db_conf
    .query(
      `INSERT INTO users (name, email, age, cpf)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [payload.name, payload.email, payload.age, payload.cpf]
    )
    .then(res => res.rows);

  return [201, queryResponse];
};

export default createUserService;
