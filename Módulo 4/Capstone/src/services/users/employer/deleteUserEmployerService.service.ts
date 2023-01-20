import { DeleteResult } from "typeorm";
import { userEmployerRepo } from "../../../repositories";

export const deleteUserEmployerService = async (
    userId: string
  ): Promise<DeleteResult> => {
    return await userEmployerRepo.softDelete(userId);
};
