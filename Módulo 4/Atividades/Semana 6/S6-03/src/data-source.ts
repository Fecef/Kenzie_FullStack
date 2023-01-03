import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  entities: ["src/entities/**/*.ts"],
  synchronize: true
})
