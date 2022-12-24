import AppDataSource from "../../data-source"
import { Category } from "../../entities/categories.entity"
import { ICategoryResponse } from "../../interfaces/categories";

export const listCategoriesService = async (): Promise<ICategoryResponse[]> => {
    const data = await AppDataSource.getRepository(Category)
        .createQueryBuilder()
        .getMany();

    return data;
}