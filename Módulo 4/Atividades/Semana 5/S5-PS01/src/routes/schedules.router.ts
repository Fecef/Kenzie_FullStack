import { Router } from "express";
import { createScheduleController, listSchedulesByPropertyController } from "../controllers";
import { validateAdmMiddleware, validateSchemaMiddleware, validateTokenMiddleware } from "../middlewares";
import { createScheduleShape } from "../serializers";

const scheduleRouter = Router();

scheduleRouter.post("",
    validateTokenMiddleware,
    validateSchemaMiddleware(createScheduleShape),
    createScheduleController
);
scheduleRouter.get("/properties/:id",
    validateTokenMiddleware,
    validateAdmMiddleware,
    listSchedulesByPropertyController
)

export default scheduleRouter;