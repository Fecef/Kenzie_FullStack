import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Admin } from "../../entities/admin.entity";
import { AppError } from "../../errors";
import { IAdminPostRequest } from "../../interface/admin.interface";
import jwt from "jsonwebtoken";

export const sessionAdminService = async ({
  email,
  password,
}: IAdminPostRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(Admin);

  const user = await userRepository.findOneBy({ email: email });

  if (!user) {
    throw new AppError("Email or password invalid!", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Email or password invalid!", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: user.id,
    expiresIn: "24h",
  });

  return token;
};
