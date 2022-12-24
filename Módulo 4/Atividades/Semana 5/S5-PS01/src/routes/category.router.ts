import { Router } from 'express';
import { createCategoryController, listCategoriesController, listPropertiesByCategoryController } from '../controllers';
import { validateAdmMiddleware, validateSchemaMiddleware, validateTokenMiddleware } from '../middlewares';
import { categoryCreateShape } from '../serializers';

const categoryRouter = Router();

categoryRouter.post("",
    validateTokenMiddleware,
    validateAdmMiddleware,
    validateSchemaMiddleware(categoryCreateShape),
    createCategoryController
);
categoryRouter.get("",
    listCategoriesController
);
categoryRouter.get("/:id/properties",
    listPropertiesByCategoryController
);

export default categoryRouter;