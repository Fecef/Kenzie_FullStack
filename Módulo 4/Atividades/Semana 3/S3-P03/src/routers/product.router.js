import { Router } from "express";
import { createProductController, listProductsController } from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { createProductShape } from "../serializers";

export const productRouter = Router();

productRouter.get("", listProductsController);
productRouter.post("", validateSchemaMiddleware(createProductShape), createProductController);
