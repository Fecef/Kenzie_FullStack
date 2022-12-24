import { Router } from "express";
import { createPetController,listPetsController } from "../controllers/pets.controllers";

const petsRoutes = Router()

petsRoutes.post('', createPetController)
petsRoutes.get('', listPetsController)

export default petsRoutes