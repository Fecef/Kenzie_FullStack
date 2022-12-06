import { Client } from "pg";

export const db_conf = new Client({
  user: process.env.DB_USER,
  database: "atv_adicionando_yup",
  port: 5432,
  host: "localhost",
  password: process.env.DB_PASSWORD,
});

export const startDatabase = async () => {
  await db_conf.connect();
  console.log("Database connected");
}
