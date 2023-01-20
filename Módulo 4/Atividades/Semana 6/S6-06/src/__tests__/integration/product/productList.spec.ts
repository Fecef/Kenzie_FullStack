import { DataSource } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import request from "supertest"
import app from '../../../app';
import { mockedProductRequest } from '../../mocks';

describe(" GET - /product/ ", () => {
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

    it(" Should be able to list all products. ", async () => {
        const { name, description, price } = mockedProductRequest;
        const newProduct = await request(app).post(baseUrl).send(mockedProductRequest);
        const response = await request(app).get(baseUrl).send(mockedProductRequest);

        expect(response.body).toEqual(
            expect.objectContaining([{
                id: newProduct.body.id,
                name: name,
                description: description,
                price: price
            }]
            )
        );

        expect(response.status).toBe(200);
    });
});