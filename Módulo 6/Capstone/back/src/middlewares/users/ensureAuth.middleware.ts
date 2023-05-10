import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors";

export const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("missing token", 401);
  }
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      throw new AppError("Invalid token", 401);
    }
    req.authUser = {
      accountType: decoded.accountType,
      id: decoded.sub,
    };
  });

  return next();
};
