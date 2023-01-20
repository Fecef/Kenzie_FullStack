import { Router } from "express";
import {
  updateRatingRequestShape,
  updateStatusRequestShape,
} from "./../serializers/proposals.schema";
import {
  deleteProposalController,
  getProposalController,
  getProposalsByIdEmployerController,
  getProposalsByIdHiredController,
  getProposalsController,
  getProposalsEmployerController,
  getProposalsHiredController,
  patchProposalEmployerController,
  patchProposalHiredController,
  postProposalController,
} from "./../controllers/proposals.controller";
import {
  validateSchemaMiddleware,
  verifyAuthMiddleware,
  verifyHiredParamsIdExistsMiddleware,
  verifyIsEmployerMiddleware,
  verifyIsHiredMiddleware,
  verifyProposalsExistsMiddleware,
  verifyUserIsAdmMiddleware,
} from "../middlewares";

import { verifyEmployerParamsIdExistsMiddleware } from "../middlewares/verifyEmployerParamsIdExists.middleware";

export const proposalsRouter = Router();

proposalsRouter.get(
  "",
  verifyAuthMiddleware,
  verifyUserIsAdmMiddleware,
  getProposalsController
);

proposalsRouter.post(
  "/hired/:id",
  verifyAuthMiddleware,
  verifyHiredParamsIdExistsMiddleware,
  verifyIsEmployerMiddleware,
  postProposalController
);

//

proposalsRouter.get(
  "/hired",
  verifyAuthMiddleware,
  verifyIsHiredMiddleware,
  getProposalsHiredController
);

proposalsRouter.get(
  "/hired/:id",
  verifyAuthMiddleware,
  verifyHiredParamsIdExistsMiddleware,
  verifyIsEmployerMiddleware,
  getProposalsByIdHiredController
);

//

proposalsRouter.get(
  "/employers",
  verifyAuthMiddleware,
  verifyIsEmployerMiddleware,
  getProposalsEmployerController
);

proposalsRouter.get(
  "/employers/:id",
  verifyAuthMiddleware,
  verifyIsEmployerMiddleware,
  verifyEmployerParamsIdExistsMiddleware,
  getProposalsByIdEmployerController
);

///

proposalsRouter.patch(
  "/:id/hired/",
  validateSchemaMiddleware(updateStatusRequestShape),
  verifyAuthMiddleware,
  verifyProposalsExistsMiddleware,
  verifyIsHiredMiddleware,
  patchProposalHiredController
);

proposalsRouter.patch(
  "/:id/employers/",
  validateSchemaMiddleware(updateRatingRequestShape),
  verifyAuthMiddleware,
  verifyProposalsExistsMiddleware,
  verifyIsEmployerMiddleware,
  patchProposalEmployerController
);

//

proposalsRouter.delete(
  "/:id",
  verifyAuthMiddleware,
  verifyProposalsExistsMiddleware,
  verifyIsEmployerMiddleware,
  deleteProposalController
);

proposalsRouter.get(
  "/:id",
  verifyAuthMiddleware,
  verifyProposalsExistsMiddleware,
  getProposalController
);
