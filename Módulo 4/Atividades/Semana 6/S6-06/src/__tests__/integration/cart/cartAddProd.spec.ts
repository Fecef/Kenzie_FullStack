import { DataSource } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import request from "supertest"
import app from '../../../app';
import { mockedProductRequest, mockedUserLogin, mockedUserRequest } from '../../mocks';

describe(" POST - /cart/ ", () => {
    let conn: DataSource;
    const baseUrl = "/cart";

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

    it(" POST - /cart/ Should not be able to add a product that don't exist. ", async () => {
        const response = await request(app).post(baseUrl).send();

        expect(response.body).toEqual(
            expect.objectContaining({
                message: "No token found"
            })
        )
        expect(response.status).toBe(401)
    });

    it(" POST - /cart/ Should not be able to add a product that don't exist. ", async () => {
        const login = await request(app).post("/users/login").send(mockedUserLogin);
        const response = await request(app).post(baseUrl).set("Authorization", `Bearer ${login.body.token}`).send({ product_id: "invalidId" });

        expect(response.body).toEqual(
            expect.objectContaining({
                message: "Product not found"
            })
        )
        expect(response.status).toBe(404)
    });

    it(" POST - /cart/ Should be to add a product to the cart. ", async () => {
        const login = await request(app).post("/users/login").send(mockedUserLogin);
        const response = await request(app).post(baseUrl).set("Authorization", `Bearer ${login.body.token}`);

        expect(response.body).toEqual(
            expect.objectContaining({
                subtotal: 1320,
            })
        )
    })

    it(" POST - /cart/ Should be to add a product to the cart that already exists. ", async () => {
        const login = await request(app).post("/users/login").send(mockedUserLogin);
        const response = await request(app).post(baseUrl).set("Authorization", `Bearer ${login.body.token}`);

        expect(response.body).toEqual(
            expect.objectContaining({
                message: "Product is already in the cart"
            })
        )
        expect(response.status).toBe(409);
    })
});