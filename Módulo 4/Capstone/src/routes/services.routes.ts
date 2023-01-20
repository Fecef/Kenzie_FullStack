import { Router } from "express";
import {
  deleteServiceController,
  getAllServicesController,
  postServiceController,
} from "../controllers/services.controller";
import {
  validateSchemaMiddleware,
  verifyAuthMiddleware,
  verifyUserIsAdmMiddleware,
} from "../middlewares";
import { createServiceShape } from "../serializers/service.schema";

export const servicesRoutes = Router();

servicesRoutes.post(
  "",
  verifyAuthMiddleware,
  verifyUserIsAdmMiddleware,
  validateSchemaMiddleware(createServiceShape),
  postServiceController
);
servicesRoutes.get(
  "",
  verifyAuthMiddleware,
  verifyUserIsAdmMiddleware,
  getAllServicesController
);
servicesRoutes.delete(
  "/:id",
  verifyAuthMiddleware,
  verifyUserIsAdmMiddleware,
  deleteServiceController
);
