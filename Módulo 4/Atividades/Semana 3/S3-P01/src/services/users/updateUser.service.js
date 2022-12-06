import { users } from "../../database";

export async function updateUserService(userData, userId, paramsId) {
    const user = users.find((user) => user.uuid === userId);
    const userIndex = users.findIndex((user) => user.uuid === paramsId);

    if (!user.isAdm && userId !== paramsId) {
        return [403, { message: "Missing admin permissions" }];
    }

    users[userIndex] = { ...users[userIndex], ...userData };

    const res = {
        uuid: users[userIndex].uuid,
        createdOn: users[userIndex].createdOn,
        updatedOn: users[userIndex].updatedOn,
        name: users[userIndex].name,
        email: users[userIndex].email,
        isAdm: users[userIndex].isAdm
    }

    return [200, res];
}