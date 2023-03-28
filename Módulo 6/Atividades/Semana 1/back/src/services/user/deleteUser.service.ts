import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/user";

export const deleteUserService = async (user: IUser): Promise<void> => {
    const userRepos = AppDataSource.getRepository(User);

    user.isActive = false;

    await userRepos.save(user);
}