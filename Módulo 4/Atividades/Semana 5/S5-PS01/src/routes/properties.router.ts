import { Router } from "express";
import { createPropertyController, listPropertiesController } from "../controllers";
import { validateAdmMiddleware, validateSchemaMiddleware, validateTokenMiddleware } from "../middlewares";
import { createPropertyShape } from "../serializers";

const propertiesRouter = Router();

propertiesRouter.post("",
    validateTokenMiddleware,
    validateAdmMiddleware,
    validateSchemaMiddleware(createPropertyShape),
    createPropertyController
)
propertiesRouter.get("",
    listPropertiesController
)

export default propertiesRouter;