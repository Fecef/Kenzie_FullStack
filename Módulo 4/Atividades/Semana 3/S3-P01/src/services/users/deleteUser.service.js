import { users } from "../../database";

export function deleteUserService(paramsId) {
    const userIndex = users.findIndex((user) => user.uuid === paramsId);

    if (userIndex === -1) {
        return [404, { message: "User not found." }]
    }

    users.splice(userIndex, 1);

    return [204];
}
