import * as express from "express";

import { IContact } from './../../interfaces/contact';
import { IUser } from "../../interfaces/user";

declare global {
    namespace Express {
        interface Request {
            user: {
                id: string,
                name?: string,
                email?: string,
                phone?: string,
                isActive?: boolean,
            },
            foundContact: IContact
        }
    }
}