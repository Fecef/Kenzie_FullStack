import { IUserResponse } from "../../../interface/users.interface";
import { userEmployerRepo } from "../../../repositories";
import { userResponseShape } from "../../../serializers/users.schema";

export const getUserEmployerService = async (
  userId: string
): Promise<IUserResponse> => {
  const user = await userEmployerRepo.findOne({
    where: {
      id: userId,
    },
    relations: {
      address: true,
    },
  });

  const data = await userResponseShape.validate(user, {
    stripUnknown: true,
  });

  return data;
};
