import { UserHired } from "../../../entities/userHired.entity";
import { userHiredRepo } from "../../../repositories";

export const getAllHiredUsersService = async (): Promise<UserHired[]> => {
    return await userHiredRepo.find();
};
