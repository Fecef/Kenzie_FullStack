import { Router } from "express";

import * as Middlewares from "../middlewares";
import * as Controller from "../controllers";
import * as Schema from "../schemas";

const loginRoutes = Router();

loginRoutes.post(
  "",
  Middlewares.validateSchema(Schema.loginRequestSchema),

  Controller.loginCrontroller
);

export { loginRoutes };
