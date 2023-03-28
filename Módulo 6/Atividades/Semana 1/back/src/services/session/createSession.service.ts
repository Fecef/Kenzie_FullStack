import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { compare } from "bcryptjs";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import { IUserLoginRequest } from "../../interfaces/user";

export const createSessionService = async ({ email, password }: IUserLoginRequest) => {
    const userRepos = AppDataSource.getRepository(User);
    const user = await userRepos.findOneBy({ email: email });

    if (!user) {
        throw new AppError("User not found.", 404);
    }

    const passwordMatch = await compare(password, user.password);

    if (!user.isActive) {
        throw new AppError("This account is inactive.");
    }

    if (!user || !passwordMatch) {
        throw new AppError("Invalid email or password.", 403);
    }

    const token = jwt.sign(
        {
            email: user.email,
            phone: user.phone,
            isActive: user.isActive
        },
        process.env.SECRET_KEY,
        {
            subject: user.id,
            expiresIn: "24h"
        }
    );

    return [token, user.id];
}