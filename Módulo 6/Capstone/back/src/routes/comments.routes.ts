import { Router } from "express";

import * as Middlewares from "../middlewares";
import * as Controller from "../controllers";
import * as Schema from "../schemas";

const commentsRoutes = Router();

commentsRoutes.post(
  "/announcement/:announcementId",
  Middlewares.ensureAuthMiddleware,
  Middlewares.validateSchema(Schema.createCommentRequestSchema),
  Controller.createCommentController
);

commentsRoutes.delete(
  "/:id",
  Middlewares.ensureAuthMiddleware,
  Middlewares.verifyIfCommentExistsMiddleware,
  Middlewares.verifyIfUserIsCommentOwnerMiddleware,
  Controller.deleteCommentController
);

commentsRoutes.patch(
  "/:id",
  Middlewares.ensureAuthMiddleware,
  Middlewares.verifyIfCommentExistsMiddleware,
  Middlewares.verifyIfUserIsCommentOwnerMiddleware,
  Controller.updateCommentController
);

export { commentsRoutes };
