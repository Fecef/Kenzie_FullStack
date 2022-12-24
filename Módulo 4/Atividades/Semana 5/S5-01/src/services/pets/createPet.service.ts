import AppDataSource from "../../data-source";
import { Owner } from "../../entities/owners.entity";
import { Pets } from "../../entities/pets.entity";
import { AppError } from "../../errors/AppError";
import { IPetsRequest} from "../../interfaces/pets"

const createPetService = async ({name,breed,weight,ownerId}: IPetsRequest): Promise<Pets>  => {

    const ownerRepository = AppDataSource.getRepository(Owner)
    const petsRepositoru = AppDataSource.getRepository(Pets)
    const findOwner = await ownerRepository.findOne({
        where: {
            id:ownerId
        }
    })

    if(!findOwner){
    throw new AppError("Owner not found", 404)
    }
    const pet = await petsRepositoru.save({
        name,
        breed,
        weight,
        owner:findOwner!
    })

    return pet


}

export default createPetService