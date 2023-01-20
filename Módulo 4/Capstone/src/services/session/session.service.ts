import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { UserEmployer } from "../../entities/userEmployer.entity";
import { UserHired } from "../../entities/userHired.entity";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import { ILoginRequest } from "../../interface";

export const loginService = async ({
  email,
  password,
}: ILoginRequest): Promise<string> => {
  const userERepository = AppDataSource.getRepository(UserEmployer);
  const userHRepository = AppDataSource.getRepository(UserHired);

  const userE = await userERepository.findOne({
    select: ["password", "id"],
    where: { email: email },
  });
  const userH = await userHRepository.findOne({
    select: ["password", "id"],
    where: { email: email },
  });

  if (!userE && !userH) {
    throw new AppError("Email or password invalid!", 403);
  }

  let user: UserEmployer | UserHired | string = "";

  if (userE) {
    user = userE;
  } else {
    user = userH;
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
