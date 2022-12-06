import "dotenv/config";
import express, { json } from "express";
import { userRouter } from "./routers";

const app = express();

app.use(json());
app.use("/users", userRouter);

export default app;
