import { Router } from "express";
import { createOwnerController, listOwnerPetsController } from "../controllers/owner.controllers";


const ownerRoutes = Router()

ownerRoutes.post('', createOwnerController)
ownerRoutes.get('/:id', listOwnerPetsController)

export default ownerRoutes