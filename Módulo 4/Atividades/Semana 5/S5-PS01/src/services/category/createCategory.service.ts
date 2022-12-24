import { AppError } from './../../errors';
import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";
import { ObjectLiteral } from 'typeorm';

export const createCategoryService = async (categoryData: ICategoryRequest): Promise<ObjectLiteral> => {
    const category = AppDataSource.getRepository(Category)

    const exist = await category
        .createQueryBuilder("name")
        .where("name = :name", { name: categoryData.name })
        .getOne();

    if (exist) {
        throw new AppError("Category already exist.", 409);
    }

    const data = await category
        .createQueryBuilder()
        .insert()
        .values({ name: categoryData.name })
        .execute()
        .then(res => res.generatedMaps[0]);

    data.name = categoryData.name

    return data;
}