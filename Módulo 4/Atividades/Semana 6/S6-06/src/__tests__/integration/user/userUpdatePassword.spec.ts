import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { mockedUserLogin, mockedUserRequest } from "../../mocks";
import request from "supertest"
import app from "../../../app";

describe(" PATCH - /users/me/updatePassword ", () => {
    let conn: DataSource;
    const baseUrl = "/users";

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then(res => conn = res)
            .catch(err => {
                console.error("Error during Data Source initialization.", err);

            });
        await request(app).post(baseUrl).send(mockedUserRequest);
    });

    afterAll(async () => {
        await conn.destroy();
    });

    it(" PATCH - /users/me/updatePassword Should be unable to update user password without token. ", async () => {
        const response = await request(app).get(baseUrl).send("email@mail.com")

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it(" PATCH - /users/me/updatePassword Should be unable to update user password to the same password. ", async () => {
        const login = await request(app).post(`${baseUrl}/login`).send(mockedUserLogin);
        const response = await request(app).patch(`${baseUrl}/me/updatePassword`)
            .set("Authorization", `Bearer ${login.body.token}`)
            .send({ password: "123456" });

        expect(response.status).toBe(409);
    });

    it(" PATCH - /users/me/updatePassword Should be able to update user password. ", async () => {
        const login = await request(app).post(`${baseUrl}/login`).send(mockedUserLogin);
        const response = await request(app).patch(`${baseUrl}/me/updatePassword`)
            .set("Authorization", `Bearer ${login.body.token}`)
            .send({ password: "123455" });

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(201);
    });
});