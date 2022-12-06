import { users } from "../../database";
import jwt from "jsonwebtoken";
import "dotenv/config";


export async function userLoginService({ email, userIndex }) {
    const token = jwt.sign({ email }, process.env.SECRET_KEY, {
        expiresIn: "24h",
        subject: users[userIndex].uuid,
    });

    return [200, { token }];
}