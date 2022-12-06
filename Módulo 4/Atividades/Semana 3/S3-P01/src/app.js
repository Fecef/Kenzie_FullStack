import express from "express";
import { loginRoutes } from "./routers/session.routes";
import { userRoutes } from "./routers/users.routes";

export const app = express();
app.use(express.json());

app.use('/users', userRoutes)
app.use('/login', loginRoutes)

