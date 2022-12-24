import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser } from "../../interfaces/users";

export const deleteUserService = async (user: IUser): Promise<{}> => {
    const userRepos = AppDataSource.getRepository(User);

    user.isActive = false;

    await userRepos.save(user);

    return {};
}