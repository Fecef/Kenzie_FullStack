import { DataSource } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import request from "supertest"
import app from '../../../app';
import { mockedProductRequest, mockedUserLogin, mockedUserRequest } from '../../mocks';
import e from 'express';

describe(" POST /buy/ ", () => {
    let conn: DataSource;
    const baseUrl = "/buy";

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then(res => conn = res)
            .catch(err => {
                console.error("Error during Data Source initialization.", err);

            });
        await request(app).post("/users").send(mockedUserRequest);
        await request(app).post("/products").send(mockedProductRequest);
    });

    afterAll(async () => {
        await conn.destroy();
    });

    it(" POST - /buy/ Should not be able to buy without auth. ", async () => {
        const response = await request(app).post(baseUrl).send();

        expect(response.body).toEqual(
            expect.objectContaining({
                message: "No token found"
            })
        );

        expect(response.status).toBe(401)
    });

    it(" POST - /buy/ Should not be able to buy products when cart is empty. ", async () => {
        const login = await request(app).post("/users/login").send(mockedUserLogin);
        const response = await request(app).post(baseUrl).set("Authorization", `Bearer ${login.body.token}`).send();

        expect(response.body).toEqual(
            expect.objectContaining({
                message: "Cart is empty"
            })
        );

        expect(response.status).toBe(400);
    });

    it(" POST - /buy/ Should be able to buy products from cart. ", async () => {
        const login = await request(app).post("/users/login").send(mockedUserLogin);
        await request(app).post("/cart").set("Authorization", `Bearer ${login.body.token}`);
        const response = await request(app).post(baseUrl).set("Authorization", `Bearer ${login.body.token}`).send();

        expect(response.body).toHaveLength(1);
        expect(response.status).toBe(201);
    });
});