import { Router } from "express";
import { createUserController, listUsersController } from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { createUserShape } from "../schemas";

export const userRouter = Router();

userRouter.post(
    "",
    validateSchemaMiddleware(createUserShape),
    createUserController
);

userRouter.get("", listUsersController);