import { Router } from "express";
import { createSessionController } from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { createSessionShape } from "../serializers";

const sessionRouter = Router();

sessionRouter.post("", validateSchemaMiddleware(createSessionShape), createSessionController);

export default sessionRouter;