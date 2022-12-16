import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import { sessionRouter, userRouter } from "./routes";
import { errorHandler } from "./errors";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);

app.use(errorHandler)

export default app;