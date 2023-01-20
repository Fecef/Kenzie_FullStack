import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { mockedUserLogin, mockedUserRequest } from "../../mocks";

describe(" GET - /users/ ", () => {
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

    it(" GET - /users/ Should not list users without token. ", async () => {
        const response = await request(app).get(baseUrl)

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it(" GET - /users/ Should not list users without token. ", async () => {
        const login = await request(app).post(`${baseUrl}/login`).send(mockedUserLogin);
        const response = await request(app).get(baseUrl).set("Authorization", `Bearer ${login.body.token}`)

        expect(response.body).toHaveLength(response.body.length);
        expect(response.status).toBe(200);
    });
});