import { createProductCategoryController } from "./category/createProductCategory.controller";
import { deleteProductCategoryController } from "./category/deleteProductCategory.controller";
import { listProductCategoryByIdController } from "./category/listProductCategoryById.controller";
import { listProductCategoriesController } from "./category/listProductsCategories.controller";
import { updateProductCategoryController } from "./category/updateProductCategory.controller";
import { createProductController } from "./product/createProduct.controller";
import { deleteProductController } from "./product/deleteProduct.controller";
import { listProductByCategoryIdController } from "./product/listProductByCategoryId.controller";
import { listProductByIdController } from "./product/listProductById.controller";
import { listProductsController } from "./product/listProducts.controller";
import { updateProductController } from "./product/updateProduct.controller";


export {
    createProductCategoryController,
    createProductController,
    listProductCategoriesController,
    listProductsController,
    listProductCategoryByIdController,
    listProductByIdController,
    listProductByCategoryIdController,
    updateProductCategoryController,
    updateProductController,
    deleteProductCategoryController,
    deleteProductController
};
