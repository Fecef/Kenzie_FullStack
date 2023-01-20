import { Router } from "express";
import { registerUserController } from "../controllers/register.controller";
import {
  validateSchemaMiddleware,
  verifyEmailExistsMiddleware,
} from "../middlewares";
import { createUserShape } from "../serializers/register.schema";

export const registerRouter = Router();

registerRouter.post(
  "",
  validateSchemaMiddleware(createUserShape),
  verifyEmailExistsMiddleware,
  registerUserController
);
