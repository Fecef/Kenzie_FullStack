import { Router } from "express";
import { createProductCategoryController, listProductCategoriesController } from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { createProductCategoryShape } from "../serializers";

export const categoryRouter = Router();

categoryRouter.get("", listProductCategoriesController);
categoryRouter.post("", validateSchemaMiddleware(createProductCategoryShape), createProductCategoryController);