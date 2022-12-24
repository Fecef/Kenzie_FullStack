import { AppError } from './../../errors';
import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import { IPropertyCreateResponse, IPropertyRequest } from "../../interfaces/properties";
import { Address } from '../../entities/addresses.entity';

export const createPropertyService = async (propertyData: IPropertyRequest): Promise<IPropertyCreateResponse> => {
    const propertyRepos = AppDataSource.getRepository(Property);
    const categoryRepos = AppDataSource.getRepository(Category);
    const addressRepos = AppDataSource.getRepository(Address);

    const category = await categoryRepos.findOneBy({ id: propertyData.categoryId });
    if (!category) {
        throw new AppError("Invalid category ID.", 404);
    }

    const foundCEP = await addressRepos.findOneBy({ zipCode: propertyData.address.zipCode })
    if (foundCEP) {
        throw new AppError("Duplicate address not allowed.", 409);
    }

    const address = addressRepos.create(propertyData.address);
    await addressRepos.save(address);

    const property = propertyRepos.create({ ...propertyData, address: address, category: category });
    await propertyRepos.save(property);

    return property;
}