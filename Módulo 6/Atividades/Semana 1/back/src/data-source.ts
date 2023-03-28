import { InitialMigration1679963545342 } from './migrations/1679963545342-InitialMigration';
import { DataSource } from "typeorm"
import "dotenv/config"
import { User } from "./entities/user.entity"
import { Contact } from "./entities/contact.entity"

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
        {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: ["src/entities/*.ts"]
        } :
        {
            type: "postgres",
            host: process.env.PGHOST,
            port: parseInt(process.env.PGPORT!),
            username: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            database: process.env.PGDATABASE,
            logging: true,
            synchronize: false,
            entities: [User, Contact],
            migrations: [InitialMigration1679963545342]
        }
)

export default AppDataSource