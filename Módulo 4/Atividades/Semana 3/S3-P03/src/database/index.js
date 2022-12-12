import { Client } from "pg";
import "dotenv/config";

export const db_conf = new Client(
    process.env.NODE_ENV === "test" ?
        {

            user: "felipe",
            password: 1234,
            database: "tests_products",
            host: "localhost",
            port: 5432,
        } : {


            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: "localhost",
            port: 5432,
        }
);

export const startDatabase = async () => {
    await db_conf.connect();
    console.log("Database connected.");
}