import { users } from "../../database";

export function listUsersService() {
    return [200, users];
}