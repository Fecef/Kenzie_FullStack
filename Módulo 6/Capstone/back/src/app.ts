import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import cors from "cors";

import { errorHandler } from "./errors";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(errorHandler);

export default app;
