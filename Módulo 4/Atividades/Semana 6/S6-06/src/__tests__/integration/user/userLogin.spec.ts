import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { mockedUserLogin, mockedUserRequest } from "../../mocks";

describe(" POST - /users/ ", () => {
    let conn: DataSource;
    const baseUrl = "/users";

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((res) => conn = res)
            .catch((err) => {
                console.error("Error during Data Source initialization.", err)
            })

        await request(app).post(baseUrl).send(mockedUserRequest);
    });

    afterAll(async () => {
        await conn.destroy()
    });

    it(" Should beable to login with user data. ", async () => {
        const response = await request(app).post(`${baseUrl}/login`).send(mockedUserLogin);

        expect(response.body).toHaveProperty("token");
        expect(response.status).toBe(200);
    });

    it(" Should not be able to login with incorret credentials. ", async () => {
        const response = await request(app).post(`${baseUrl}/login`).send({
            email: "email@mail.com",
            password: "1234567"
        });

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it(" Should not be able to login with invalid account. ", async () => {
        const response = await request(app).post(`${baseUrl}/login`).send({
            email: "invalide@mail.com",
            password: "1234567"
        });

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(404);
    });
});