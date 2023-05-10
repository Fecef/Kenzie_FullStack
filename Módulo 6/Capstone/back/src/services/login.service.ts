import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import "dotenv/config";

import { prisma } from "../database";
import { AppError } from "../errors";
import { IUserLogin } from "../../../front/src/interfaces/user.interface";

export const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    throw new AppError("User or password invalid", 403);
  }

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign(
    { accountType: user.accountType },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );
  return token;
};
