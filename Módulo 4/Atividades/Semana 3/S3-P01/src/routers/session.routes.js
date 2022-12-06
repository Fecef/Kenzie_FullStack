import { Router } from "express";
import { userLoginController } from "../controllers/session.controllers";
import { validateUserMiddleware } from "../middlewares";

export const loginRoutes = Router();

loginRoutes.post('', validateUserMiddleware, userLoginController);