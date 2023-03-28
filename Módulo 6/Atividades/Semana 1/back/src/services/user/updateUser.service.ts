import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserUpdateRequest } from "../../interfaces/user";
import { createUserResponseShape } from "../../serializers";

export const updateUserService = async (user: IUser, userData: IUserUpdateRequest) => {
    const userRepos = AppDataSource.getRepository(User);
    const updatedUser = userRepos.create({ ...user, ...userData });

    await userRepos.save(updatedUser);

    const data = await createUserResponseShape.validate(updatedUser, { stripUnknown: true });

    return data;
}