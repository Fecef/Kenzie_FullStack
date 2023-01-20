import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { mockedUserLogin, mockedUserRequest } from "../../mocks";
import request from "supertest"
import app from "../../../app";

describe(" GET - /users/me ", () => {
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

    it(" GET - /users/me Should not list a user without token. ", async () => {
        const response = await request(app).get(baseUrl).send("email@mail.com")

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it(" GET - /users/me Should be able to list one user. ", async () => {
        const login = await request(app).post(`${baseUrl}/login`).send(mockedUserLogin);
        const response = await request(app).get(`${baseUrl}/me`).set("Authorization", `Bearer ${login.body.token}`).send("email@mail.com")

        expect(response.body).toEqual(
            expect.objectContaining({
                buys: expect.any(Array),
                cart: expect.any(Object),
                email: expect.any(String),
                id: expect.any(String),
                name: expect.any(String),
                password: expect.any(String)
            })
        );

        expect(response.status).toBe(200);
    });
});