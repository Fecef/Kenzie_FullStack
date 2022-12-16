import { IUser } from './../../interfaces/user.interface';
import * as express from "express";

declare global {
    namespace Express {
        interface Request {
            user: {
                id?: string,
                email?: string,
                isAdm?: boolean,
                isActive?: boolean
            },
            foundUser: IUser
        }
    }
}