import { Request, Response } from "express";
import { IPetsRequest } from "../interfaces/pets";;
import createPetService from "../services/pets/createPet.service";
import listAllPetsService from "../services/pets/listAllPets.service";

const createPetController = async (req: Request, res: Response) => {
    const { name,breed,weight,ownerId}: IPetsRequest = req.body
    const Pet = await createPetService({name, breed, weight, ownerId})
    return res.status(201).json(Pet)
}

const listPetsController = async (req: Request, res: Response) => {
    const pets = await listAllPetsService()
    return res.json(pets)
}

export { createPetController, listPetsController }