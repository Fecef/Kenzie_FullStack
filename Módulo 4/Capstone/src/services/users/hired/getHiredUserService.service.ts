import { Request } from "express";

export const getHiredUserService = (req: Request) => req.user;
