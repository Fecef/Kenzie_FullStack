import { Router } from "express"
import userController from "./controllers/user.controller"

const routes = Router()

routes.get("/users", userController.listAllUsers)
routes.post("/users", userController.createUser)

export default routes

