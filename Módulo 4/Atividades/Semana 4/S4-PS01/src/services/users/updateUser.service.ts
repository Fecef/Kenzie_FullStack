import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserUpdate } from "../../interfaces/user.interface";
import { userDataWithoutPwdShape } from "../../serializers/users.schema";

export const updateUserService = async (user: IUser, targetData: IUserUpdate) => {
    const userRepos = AppDataSource.getRepository(User);
    const updatedUser = userRepos.create({ ...user, ...targetData })

    await userRepos.save(updatedUser);

    const updatedUserWithoutPwd = await userDataWithoutPwdShape.validate(updatedUser, { stripUnknown: true });

    return updatedUserWithoutPwd;
}