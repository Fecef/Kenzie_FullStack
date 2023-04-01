import { User } from './../entities/user.entity';
import AppDataSource from "../data-source";
import { Request, Response, NextFunction } from "express";
import { AppError } from '../errors';

const validateDuplicateEmailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepos = AppDataSource.getRepository(User);
    const duplicateEmail = await userRepos.findOneBy({ email: req.body.email });

    if (duplicateEmail) {
        throw new AppError("Email already exists.", 409);
    }

    return next();
}

export default validateDuplicateEmailMiddleware;