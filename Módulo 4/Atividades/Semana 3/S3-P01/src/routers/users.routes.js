import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, retrieveUserController, updateUserController } from "../controllers/users.controllers";
import { duplicateEmailMiddleware, ensureAuthMiddleware, verifyIfAdmMiddleware } from "../middlewares";

export const userRoutes = Router();

userRoutes.post('', duplicateEmailMiddleware, createUserController);
userRoutes.get('', ensureAuthMiddleware, verifyIfAdmMiddleware, listUsersController);
userRoutes.delete('/:id', ensureAuthMiddleware, verifyIfAdmMiddleware, deleteUserController);
userRoutes.get('/profile', ensureAuthMiddleware, retrieveUserController);
userRoutes.patch('/:id', ensureAuthMiddleware, updateUserController);