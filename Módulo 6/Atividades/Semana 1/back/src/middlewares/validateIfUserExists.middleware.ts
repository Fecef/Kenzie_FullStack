import { createUserResponseShape } from './../serializers/user.schema';
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

const validateIfUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepos = AppDataSource.getRepository(User);
    const user = await userRepos.findOneBy({ id: req.user.id });

    if (!user) {
        throw new AppError("User not found.", 404);
    }

    const userWithouPass = await createUserResponseShape.validate(user, { stripUnknown: true })
    
    req.user = userWithouPass;

    return next();
};

export default validateIfUserExistsMiddleware;