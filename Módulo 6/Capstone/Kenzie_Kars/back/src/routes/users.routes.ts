import { Router } from "express";

import * as Middlewares from "../middlewares";
import * as Controller from "../controllers";
import * as Schema from "../schemas";

const usersRoutes = Router();

usersRoutes.post(
  "",
  Middlewares.validateSchema(Schema.createUserRequestSchema),
  Middlewares.verifyDuplicateUserMiddleware,
  Controller.createUserController
);

usersRoutes.get(
  "/profile",
  Middlewares.ensureAuthMiddleware,
  Controller.userProfileController
);

usersRoutes.patch(
  "/profile",
  Middlewares.ensureAuthMiddleware,
  Middlewares.validateSchema(Schema.updateUserRequestSchema),
  Controller.updateUserController
);

usersRoutes.patch(
  "/profile/address",
  Middlewares.ensureAuthMiddleware,
  Middlewares.validateSchema(Schema.updateUserAddressRequestSchema),
  Controller.updateUserAddressController
);

usersRoutes.delete(
  "/profile",
  Middlewares.ensureAuthMiddleware,
  Controller.deleteUserController
);

usersRoutes.get("/:id", Controller.getOneUserController);

usersRoutes.post(
  "/resetPassword",
  Middlewares.validateSchema(Schema.sendResetEmailPasswordSchema),
  Controller.sendResetEmailPasswordController
);

usersRoutes.patch(
  "/resetPassword/:token",
  Middlewares.validateSchema(Schema.resetPasswordSchema),
  Controller.resetPasswordController
);

export { usersRoutes };
