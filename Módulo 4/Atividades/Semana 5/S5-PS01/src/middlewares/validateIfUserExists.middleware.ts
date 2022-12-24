import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

const validateIfUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const userRepos = AppDataSource.getRepository(User);
    const user = await userRepos.findOneBy({ id: id });

    if (!user) {
        throw new AppError("User not found.", 404);
    }

    req.foundUser = user;

    return next();
};

export default validateIfUserExistsMiddleware;