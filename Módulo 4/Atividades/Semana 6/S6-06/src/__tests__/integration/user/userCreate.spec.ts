import { DataSource, Repository } from "typeorm";
import request from "supertest"

import * as uuid from 'uuid'
jest.mock('uuid')
import * as bcrypt from 'bcrypt'
import { AppDataSource } from "../../../data-source";
import { User } from "../../../entities/user.entity";
import app from "../../../app";
import { mockedUserRequest } from "../../mocks";

describe(" POST - /users/ ", () => {
    let conn: DataSource
    const baseUrl = "/users";
    const userRepos: Repository<User> = AppDataSource.getRepository(User);

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((res) => conn = res)
            .catch((err) => {
                console.error("Error during Data Source initialization.", err)
            })
    });

    beforeEach(async () => {
        const users = await userRepos.find();
        await userRepos.remove(users);
    });

    afterAll(async () => {
        await conn.destroy()
    });

    test(" Should create an User and its Cart ", async () => {
        const uuidSpy = jest.spyOn(uuid, "v4");
        uuidSpy.mockReturnValue("some-uuid");

        const { name, email, password } = mockedUserRequest;

        const response = await request(app).post("/users").send(mockedUserRequest);

        expect(response.status).toBe(201);

        expect(uuidSpy).toHaveBeenCalled();

        expect(response.body).toEqual(
            expect.objectContaining({
                id: "some-uuid",
                name: name,
                email: email,
            })
        );
        expect(bcrypt.compareSync(password, response.body.password)).toBeTruthy();

        expect(response.body.cart).toEqual(
            expect.objectContaining({
                id: "some-uuid",
                subtotal: 0,
            })
        );
    });

    it(" Should not create a User that already exists. ", async () => {
        await request(app).post(baseUrl).send(mockedUserRequest);
        const response = await request(app).post(baseUrl).send(mockedUserRequest);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(409);
    });
})