import AppDataSource from "../../data-source";
import { createUserResponseShape } from './../../serializers/user.schema';
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/user";

export const retrieveUserService = async (userData: IUser) => {
    const userRepos = AppDataSource.getRepository(User);
    const user = await userRepos.findOneBy({ id: userData.id });

    const data = await createUserResponseShape.validate(user, { stripUnknown: true })

    return data
}