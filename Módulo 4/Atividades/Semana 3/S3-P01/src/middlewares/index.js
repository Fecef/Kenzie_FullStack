import { compare } from "bcryptjs";
import { users } from "../database";
import jwt from "jsonwebtoken";

export function ensureAuthMiddleware(req, res, next) {
    let authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({ message: "Missing authorization headers" });
    }

    authorization = authorization.split(" ")[1];

    return jwt.verify(authorization, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: "Missing authorization headers" });
        }

        req.user = { id: decoded.sub };

        return next();
    });
}

export function duplicateEmailMiddleware(req, res, next) {
    const duplicateEmail = users.find((user) => user.email === req.body.email);

    if (duplicateEmail) {
        return res.status(409).json({ message: "E-mail already registered." });
    }

    return next();
}

export async function validateUserMiddleware(req, res, next) {
    const { email, password } = req.body;
    const userIndex = users.findIndex((user) => user.email === email);
    const passwordMatch = await compare(password, users[userIndex].password);

    if (userIndex === -1) {
        return res.status(401).json({ message: "Wrong email/password" });
    }

    if (!passwordMatch) {
        return res.status(401).json({ message: "Wrong email/password" });
    }

    req.body = { ...req.body, userIndex }

    return next();
}


export function verifyIfAdmMiddleware(req, res, next) {
    const user = users.find((user) => user.uuid === req.user.id);

    if (!user.isAdm) {
        return res.status(403).json({ message: "Missing admin permissions" });
    }

    return next();
}