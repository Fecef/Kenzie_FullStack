import { Router } from "express";
import {
    createProductCategoryController,
    deleteProductCategoryController,
    listProductCategoriesController,
    listProductCategoryByIdController,
    updateProductCategoryController
} from "../../controllers";
import { validateSchemaMiddleware } from "../../middlewares";
import { createProductCategoryShape, updateProductCategoryShape } from "../../serializers";


export const categoryRouter = Router();

categoryRouter.get("", listProductCategoriesController);
categoryRouter.post("", validateSchemaMiddleware(createProductCategoryShape), createProductCategoryController);
categoryRouter.get("/:id", listProductCategoryByIdController);
categoryRouter.patch("/:id", validateSchemaMiddleware(updateProductCategoryShape), updateProductCategoryController);
categoryRouter.delete("/:id", deleteProductCategoryController);