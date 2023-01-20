import { AppDataSource } from "../../data-source";
import { UserEmployer } from "../../entities/userEmployer.entity";
import { UserHired } from "../../entities/userHired.entity";
import { IRegisterRequest } from "../../interface/register.interface";
import { IUserWithoutPass } from "../../interface/users.interface";
import { returnCreateUserSerializer } from "../../serializers/register.schema";

export const registerUserService = async (
  userData: IRegisterRequest
): Promise<IUserWithoutPass> => {
  let userRepository = AppDataSource.getRepository(UserEmployer);

  if (userData.is_hired) {
    userRepository = AppDataSource.getRepository(UserHired);
  }

  const user = userRepository.create(userData);  
  await userRepository.save(user);

  const returnedUser = await returnCreateUserSerializer.validate(user, {
    stripUnknown: true,
  });

  return returnedUser;
};
