import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest, IUserWithoutPwd } from "../../interfaces/users";
import { userDataWithoutPwdShape } from "../../serializers/users.schema";

export const createUserService = async (userData: IUserRequest): Promise<IUserWithoutPwd> => {
    const userRepos = AppDataSource.getRepository(User);
    const user = userRepos.create(userData);

    await userRepos.save(user);

    const data = await userDataWithoutPwdShape.validate(user, { stripUnknown: true });

    return data;
};