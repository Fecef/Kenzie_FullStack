import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import ErrorHTTP from "../../errors/ErrorHTTP";
import { IUser } from "../../interfaces/user";

const userCreateService = async ({ email, name, age }: IUser) => {
  const userRepository = AppDataSource.getRepository(User);

  if(age < 18) throw new ErrorHTTP("Only 18+ members are allowed.");

  const userAlreadyExists = await userRepository.findOne({
    where: {
      email
    }
  });

  if(userAlreadyExists) throw new ErrorHTTP("E-mail already in use.");

  const newUser = userRepository.create({
    email: email,
    name: name,
    age: age,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;
