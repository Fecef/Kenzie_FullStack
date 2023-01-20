import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { validateSchemaMiddleware } from "../middlewares";
import { loginShape } from "../serializers/login.schema";

export const loginRouter = Router();

loginRouter.post("", validateSchemaMiddleware(loginShape), loginController);
