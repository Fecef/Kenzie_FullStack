import { annoucementsRoutes } from "./annoucements.routes";
import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { loginRoutes } from "./login.routes";
import { commentsRoutes } from "./comments.routes";

const routes = Router();

routes.use("/announcements", annoucementsRoutes);
routes.use("/users", usersRoutes);
routes.use("/login", loginRoutes);
routes.use("/comments", commentsRoutes);

export { routes };
