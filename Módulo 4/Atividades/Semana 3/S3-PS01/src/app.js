import "express-async-errors";
import "dotenv/config";
import express, { json } from "express";
import { errorHandler } from "./errors";
import { categoryRouter, productRouter } from "./routers";

export const app = express();
app.use(json());

app.use("/categories", categoryRouter);
app.use("/products", productRouter);

app.use(errorHandler);