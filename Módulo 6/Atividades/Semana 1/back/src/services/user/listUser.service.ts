import AppDataSource from "../../data-source";

import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/user";
import { listUserResponseShape } from "../../serializers";

export const listUserService = async (): Promise<IUser[]> => {
    const userRespos = AppDataSource.getRepository(User);
    const userList = await userRespos.find();

    const data = await listUserResponseShape.validate(userList, { stripUnknown: true });

    return data;
}