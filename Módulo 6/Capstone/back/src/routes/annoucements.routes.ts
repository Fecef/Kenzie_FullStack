import { Router } from "express";

import * as Middlewares from "../middlewares";
import * as Controller from "../controllers";
import * as Schema from "../schemas";

const annoucementsRoutes = Router();

annoucementsRoutes.get("/", Controller.getAllAnnouncementController);

annoucementsRoutes.post(
  "/",
  Middlewares.ensureAuthMiddleware,
  Middlewares.verifyIfUserIsSeller,
  Middlewares.validateSchema(Schema.createAnnouncementSchema),
  Controller.createAnnouncementController
);

annoucementsRoutes.get(
  "/:id",
  Middlewares.verifyNotExistAnnoucementMiddleware,
  Controller.getOneAnnouncementController
);

annoucementsRoutes.patch(
  "/:id",
  Middlewares.ensureAuthMiddleware,
  Middlewares.validateSchema(Schema.updateAnnouncementSchema),
  Middlewares.verifyNotExistAnnoucementMiddleware,
  Middlewares.verifyIfUserIsAnnouncementOwnerMiddleware,
  Controller.updateAnnouncementController
);

annoucementsRoutes.delete(
  "/:id",
  Middlewares.ensureAuthMiddleware,
  Middlewares.verifyNotExistAnnoucementMiddleware,
  Middlewares.verifyIfUserIsAnnouncementOwnerMiddleware,
  Controller.deleteAnnouncementController
);

export { annoucementsRoutes };
