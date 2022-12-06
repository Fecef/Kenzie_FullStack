import { users } from "../../database";
import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";


export async function createUserService({ name, email, password }) {
    const hashedPassword = { password: await hash(password, 10) }
    const user = {
        uuid: uuidv4(),
        name,
        email,
        createdOn: new Date(),
        updatedOn: new Date(),
        isAdm: true,
    };

    users.push({ ...user, ...hashedPassword });

    return [201, user];
}