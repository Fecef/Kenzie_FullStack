import {
  deleteEmployerUserController,
  getEmployerUserController,
  updateAddressUserController,
  updateEmployerUserController,
} from "../controllers/users.controller";
import { Router } from "express";
import {
  deleteUserHiredController,
  updateAddressUserHiredController,
  updateUserHiredController,
  getAllHiredUsersController,
  retrieveHiredUserController,
  updateServiceUserHiredController,
  getHiredUserController,
} from "../controllers/usersHired.controller";
import {
  verifyAuthMiddleware,
  verifyHiredParamsIdExistsMiddleware,
  verifyIsEmployerMiddleware,
  verifyIsHiredMiddleware,
  validateSchemaMiddleware,
} from "../middlewares";
import {
  updateAddressShape,
  updateUserShape,
} from "../serializers/users.schema";

export const usersRouter = Router();

usersRouter.get("/hired/all", getAllHiredUsersController);

usersRouter.get(
  "/hired",
  verifyAuthMiddleware, // verificar se o usuario logado
  verifyIsHiredMiddleware, // verificar usuario logado é employer
  getHiredUserController
);

usersRouter.get(
  "/hired/:id",
  verifyAuthMiddleware, // verificar usuario logado
  verifyHiredParamsIdExistsMiddleware, // verificar se id do parametro é um hired
  verifyIsEmployerMiddleware, // verificar se o usuario logado é um employer
  retrieveHiredUserController
);

usersRouter.patch(
  "/hired",
  validateSchemaMiddleware(updateUserShape), // validateSchema()
  verifyAuthMiddleware, // verificar se o usuario logado
  verifyIsHiredMiddleware, // verificar usuario logado é hired
  updateUserHiredController
);

usersRouter.delete(
  "/hired",
  verifyAuthMiddleware, // verificar se o usuario logado
  verifyIsHiredMiddleware, // verificar usuario logado é hired
  deleteUserHiredController
);

usersRouter.patch(
  "/hired/address",
  validateSchemaMiddleware(updateAddressShape), // validateSchema()
  verifyAuthMiddleware, // verificar se o usuario logado
  verifyIsHiredMiddleware, // verificar usuario logado é hired
  updateAddressUserHiredController
);

usersRouter.patch(
  "/hired/services",
  verifyAuthMiddleware, // verificar se o usuario logado
  verifyIsHiredMiddleware, // verificar usuario logado é hired
  updateServiceUserHiredController
);

usersRouter.get(
  "/employer",
  verifyAuthMiddleware, // verificar se o usuario logado
  verifyIsEmployerMiddleware, // verificar usuario logado é employer
  getEmployerUserController
);

usersRouter.patch(
  "/employer",
  validateSchemaMiddleware(updateUserShape), // validateSchema()
  verifyAuthMiddleware, // verificar se o usuario logado
  verifyIsEmployerMiddleware, // verificar usuario logado é employer
  updateEmployerUserController
);

usersRouter.delete(
  "/employer",
  verifyAuthMiddleware, // verificar se o usuario logado
  verifyIsEmployerMiddleware, // verificar usuario logado é employer
  deleteEmployerUserController
);

usersRouter.patch(
  "/employer/address",
  validateSchemaMiddleware(updateAddressShape), // validateSchema()
  verifyAuthMiddleware, // verificar se o usuario logado
  verifyIsEmployerMiddleware, // verificar usuario logado é employer
  updateAddressUserController
);
