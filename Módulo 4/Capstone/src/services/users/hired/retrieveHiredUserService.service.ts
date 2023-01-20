import { UserHired } from "../../../entities/userHired.entity";
import { userHiredRepo } from "../../../repositories";

export const retrieveHiredUserService = async (
    userId: string
  ): Promise<UserHired> => {
    return await userHiredRepo.findOneBy({ id: userId });
};
