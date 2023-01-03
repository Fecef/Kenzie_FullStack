import createUserService from "../../services/createUser.service"

describe("/users", () => {
    test("POST /users - Must be able to create a user.", () => {
        const name = "Bozo";
        const email = "bozonacadeia@mail.com";
        const password = "bozolixo";
        const user = { name, email, password };

        const newUser = createUserService(user);

        expect(newUser).toEqual(
            expect.objectContaining({
                name,
                email,
                password,
            })
        );
    });
});