import AppDataSource from "../../data-source";
import { Owner } from "../../entities/owners.entity";
import { AppError } from "../../errors/AppError";
import {  IOwnerRequest } from "../../interfaces/owner";

const createOwnerService = async ({ name, email }: IOwnerRequest): Promise<Owner> => {

    const ownerRepository = AppDataSource.getRepository(Owner)
    const findOwner = await ownerRepository.findOne({
        where: {
            email
        }
    })

    if(findOwner){
    throw new AppError("Owner already exists", 409)
    }
    const owner = await ownerRepository.save({
        name,
        email
    })

    return owner

}

export default createOwnerService