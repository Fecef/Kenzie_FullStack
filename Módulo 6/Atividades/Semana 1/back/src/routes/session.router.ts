import { Router } from "express";

import { createSessionShape } from "../serializers";
import * as middleware from "../middlewares"
import * as controller from "../controllers"

export const sessionRouter = Router();

sessionRouter.post("",
    middleware.validateSchemaMiddleware(createSessionShape),
    controller.createSessionController
);
