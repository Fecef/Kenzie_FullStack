import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { retrieveUserService } from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";

export async function createUserController(req, res) {
    const [status, user] = await createUserService(req.body);
    return res.status(status).json(user);
}

export function listUsersController(req, res) {
    const [status, users] = listUsersService();
    return res.status(status).json(users);
}

export function deleteUserController(req, res) {
    const [status, data] = deleteUserService(req.params.id);
    return res.status(status).json(data);
}

export function retrieveUserController(req, res) {
    const [status, user] = retrieveUserService(req.user.id);
    return res.status(status).json(user);
}

export async function updateUserController(req, res) {
    const [status, user] = await updateUserService(req.body, req.user.id, req.params.id);
    return res.status(status).json(user);
}