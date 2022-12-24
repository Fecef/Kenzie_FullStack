import AppDataSource from "../../data-source"
import { Property } from "../../entities/properties.entity"

export const listPropertiesService = async () => {
    const data = await AppDataSource.getRepository(Property).find();

    return data;
}