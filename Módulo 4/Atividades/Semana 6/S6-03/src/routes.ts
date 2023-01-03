import { Router } from "express";
import userCreateController from "./controllers/user/userCreate.controller";
import userListController from "./controllers/user/userList.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);

export default routes;
