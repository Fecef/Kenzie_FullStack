import { Router } from "express";
import {
    createProductController,
    deleteProductController,
    listProductByCategoryIdController,
    listProductByIdController,
    listProductsController,
    updateProductController
} from "../../controllers";
import { validateSchemaMiddleware } from "../../middlewares";
import { createProductShape, updateProductShape } from "../../serializers";


export const productRouter = Router();

productRouter.get("", listProductsController);
productRouter.post("", validateSchemaMiddleware(createProductShape), createProductController);
productRouter.get("/:id", listProductByIdController);
productRouter.patch("/:id", validateSchemaMiddleware(updateProductShape), updateProductController);
productRouter.delete("/:id", deleteProductController);
productRouter.get("/category/:id", listProductByCategoryIdController);