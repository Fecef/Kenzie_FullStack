import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import ErrorHTTP from "../../errors/ErrorHTTP";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  if(!users.length) throw new ErrorHTTP("There's no available users.")

  return users;
};

export default userListService;
