import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { mockedProductRequest } from "../../mocks";
import * as uuid from 'uuid'
jest.mock('uuid')

describe(" POST - /products/ ", () => {
    let conn: DataSource;
    const baseUrl = "/products";

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then(res => conn = res)
            .catch(err => {
                console.error("Error during Data Source initialization,", err)
            })
    });

    afterAll(async () => {
        await conn.destroy();
    });

    it(" Should be able to create a product. ", async () => {
        const uuidSpy = jest.spyOn(uuid, "v4");
        uuidSpy.mockReturnValue("product-uuid");

        const { name, description, price } = mockedProductRequest;
        const response = await request(app).post(baseUrl).send(mockedProductRequest);

        expect(response.body).toEqual(
            expect.objectContaining({
                id: "product-uuid",
                name: name,
                price: price,
                description: description,
            })
        );

        expect(response.status).toBe(201);
    });

    it(" Should not be able to create a product that already exists. ", async () => {
        const response = await request(app).post(baseUrl).send(mockedProductRequest);

        expect(response.body).toEqual(
            expect.objectContaining({
                message: "Product already registered."
            })
        );
        expect(response.status).toBe(409);
    });
});