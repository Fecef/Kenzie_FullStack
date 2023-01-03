import listAllUsersService from "../../services/listAllUsers.service"

describe("/users", () => {
    test("GET /users - Should list all registered users.", () => {
        const userList = listAllUsersService();

        expect(userList).toHaveProperty("map")
    });
});