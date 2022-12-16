import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser } from "../../interfaces/user.interface";

export const deleteUserService = async (user: IUser) => {
    const userRepos = AppDataSource.getRepository(User);

    user.isActive = false;

    await userRepos.save(user);

    return {};
}