import { users } from "../../database";

export function retrieveUserService(id) {
    const index = users.findIndex((user) => user.uuid === id);
    const user = {
        uuid: users[index].uuid,
        createdOn: users[index].createdOn,
        updatedOn: users[index].updatedOn,
        name: users[index].name,
        email: users[index].email,
        isAdm: users[index].isAdm,
    };

    return [200, user];
}