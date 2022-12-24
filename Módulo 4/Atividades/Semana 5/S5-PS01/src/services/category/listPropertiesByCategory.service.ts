import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { Category } from '../../entities/categories.entity';

export const listPropertiesByCategoryService = async (categoryId: string) => {
    const categoryRepos = AppDataSource.getRepository(Category)
    const category = await categoryRepos.find({
        relations: {
            properties: true
        },
        where: {
            id: categoryId
        }
    });

    if (!category.length) {
        throw new AppError("Invalid category ID.", 404);
    }

    return category;
}