import { Request, Response } from "express";
import { IOwnerRequest } from "../interfaces/owner";
import createOwnerService from "../services/owners/createOwner.service";
import listOwnerPetsService from "../services/owners/listOwnerPets.service";


const createOwnerController = async (req: Request, res: Response) => {
    const {name, email}: IOwnerRequest = req.body
    const owner = await createOwnerService({name, email})
    return res.status(201).json(owner)
}

const listOwnerPetsController = async (req: Request, res: Response) => {

    const owner= await listOwnerPetsService(req.params.id)
    return res.json(owner)
}



export { createOwnerController, listOwnerPetsController }