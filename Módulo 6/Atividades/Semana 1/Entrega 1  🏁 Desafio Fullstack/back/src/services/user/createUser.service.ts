import AppDataSource from "../../data-source";

import { IUserRegisterRequest, IUserRegisterResponse } from "../../interfaces/user";
import { User } from "../../entities/user.entity";
import { createUserResponseShape } from "../../serializers";

export const createUserService = async (userData: IUserRegisterRequest): Promise<IUserRegisterResponse> => {
    const userRepos = AppDataSource.getRepository(User);
    const user = userRepos.create(userData);

    await userRepos.save(user)

    const data = await createUserResponseShape.validate(user, { stripUnknown: true });

    return data;
}