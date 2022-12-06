import { Router } from "express";
import { createUserController, listUsersController } from "../controllers";
import {
  verifyCpfExistsMiddleware,
  verifyEmailExistsMiddleware,
} from "../middlewares";

const userRouter = Router();

userRouter.post(
  "",
  verifyCpfExistsMiddleware,
  verifyEmailExistsMiddleware,
  createUserController
);
userRouter.get("", listUsersController);

export default userRouter;
