import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { errorHandler } from "./errors";
import {
  loginRouter,
  proposalsRouter,
  registerRouter,
  usersRouter,
  adminRoutes,
  servicesRoutes,
} from "./routes";

const app = express();

app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/proposals", proposalsRouter);
app.use("/admin", adminRoutes);
app.use("/services", servicesRoutes);

app.use(errorHandler);

export default app;
