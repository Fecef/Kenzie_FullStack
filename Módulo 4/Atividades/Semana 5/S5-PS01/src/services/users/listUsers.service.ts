import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserWithoutPwd } from "../../interfaces/users";
import { listUsersShape } from "../../serializers";

export const listUsersService = async (): Promise<IUserWithoutPwd[]> => {
    const userRepos = AppDataSource.getRepository(User);
    const data = await userRepos.find();

    const validatedData = await listUsersShape.validate(data, { stripUnknown: true });

    return validatedData;
}