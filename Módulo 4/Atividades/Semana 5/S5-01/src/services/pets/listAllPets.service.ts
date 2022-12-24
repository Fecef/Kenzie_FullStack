import AppDataSource from "../../data-source";
import { Pets } from "../../entities/pets.entity";

const listAllPetsService = async (): Promise<Pets[]> => {
    const petsReposity = AppDataSource.getRepository(Pets)
    const pets = await petsReposity.find()

    return pets

}

export default listAllPetsService