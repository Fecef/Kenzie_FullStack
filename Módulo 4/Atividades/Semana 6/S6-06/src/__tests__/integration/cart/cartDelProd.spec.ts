import { DataSource, Repository } from 'typeorm';
import { AppDataSource } from '../../../data-source';
import request from "supertest"
import app from '../../../app';
import { mockedProductRequest, mockedUserLogin, mockedUserRequest } from '../../mocks';
import { Product } from '../../../entities/product.entity';

describe(" DELETE /cart/:product_id ", () => {
    let conn: DataSource;
    const baseUrl = "/cart";
    const productRepos: Repository<Product> = AppDataSource.getRepository(Product)

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then(res => conn = res)
            .catch(err => {
                console.error("Error during Data Source initialization.", err);

            });
        await request(app).post("/users").send(mockedUserRequest);

    });

    beforeEach(async () => {
        const products = await productRepos.find();
        await productRepos.remove(products);
    });

    afterAll(async () => {
        await conn.destroy();
    });

    it(" DELETE - /cart/:product_id Should not be able to remove a product from cart without token. ", async () => {
        const login = await request(app).post("/users/login").send(mockedUserLogin);
        const newProduct = await request(app).post("/products").send(mockedProductRequest);
        await request(app).post(baseUrl).set("Authorization", `Bearer ${login.body.token}`);
        const response = await request(app).delete(`${baseUrl}/${newProduct.body.id}`)

        expect(response.body).toEqual(
            expect.objectContaining({
                message: "No token found"
            })
        )
        expect(response.status).toBe(401)
    });

    it(" DELETE - /cart/:product_id Should be able to remove a product from cart. ", async () => {
        const login = await request(app).post("/users/login").send(mockedUserLogin);
        const newProduct = await request(app).post("/products").send(mockedProductRequest);
        await request(app).post(baseUrl).set("Authorization", `Bearer ${login.body.token}`);
        const response = await request(app).delete(`${baseUrl}/${newProduct.body.id}`).set("Authorization", `Bearer ${login.body.token}`);

        expect(response.status).toBe(204)
    });
});