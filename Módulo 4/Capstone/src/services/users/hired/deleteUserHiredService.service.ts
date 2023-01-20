import { userHiredRepo } from "../../../repositories";
import { DeleteResult } from "typeorm";

export const deleteUserHiredService = async (
    userId: string
  ): Promise<DeleteResult> => {
    return await userHiredRepo.softDelete(userId);
};
