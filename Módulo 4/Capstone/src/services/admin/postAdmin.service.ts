import { AppDataSource } from "../../data-source";
import { Admin } from "../../entities/admin.entity";
import { AppError } from "../../errors";
import { IAdminPostRequest } from "../../interface/admin.interface";
import { IAdmWithoutPass } from "../../interface/users.interface";
import { createAdminResponseShape } from "../../serializers/register.schema";

export const postAdminService = async (
  userData: IAdminPostRequest
): Promise<IAdmWithoutPass> => {
  const userRepository = AppDataSource.getRepository(Admin);

  let user = await userRepository.findOneBy({ email: userData.email });

  if (user) {
    throw new AppError("User alredy exist!", 409);
  }

  user = userRepository.create(userData);
  await userRepository.save(user);

  const returnedAdm = await createAdminResponseShape.validate(user, {
    stripUnknown: true,
  });

  return returnedAdm;
};
