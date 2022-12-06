import { db_conf } from "../database";

const listUsersService = async () => {
  const queryResponse = await db_conf
    .query("SELECT * FROM users;")
    .then(res => res.rows);

  return [200, queryResponse];
};

export default listUsersService;
