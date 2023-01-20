import { DataSource } from "typeorm";
import request from "supertest";
import { AppDataSource } from "../../../data-source";
import app from "../../../app";
import { mockedUserLogin, mockedUserRequest } from "../../mocks";


describe(" DELETE - /users/me ", () => {
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

    it(" DELETE - /users/me Should not delete an User account without token. ", async () => {
        const response = await request(app).delete(`${baseUrl}/me`).send("email@mail.com");

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it(" DELETE - /users/me Should delete an User account. ", async () => {
        const login = await request(app).post(`${baseUrl}/login`).send(mockedUserLogin);
        const response = await request(app).delete(`${baseUrl}/me`).set("Authorization", `Bearer ${login.body.token}`).send("email@mail.com");

        expect(response.status).toBe(200);
    });
});