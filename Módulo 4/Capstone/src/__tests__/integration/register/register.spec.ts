import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import app from "../../../app";
import request from "supertest";
import { mockedEmployerRegister } from "../../mocks/integration/register.mock";

describe("POST - /register", () => {
  let conn: DataSource;
  const baseUrl = "/register";

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (conn = res))
      .catch((err) => {
        console.error("Error during Data Source initialization.", err);
      });
  });

  afterAll(async () => {
    await conn.destroy();
  });

  it("POST /register - ABLE to create an user.", async () => {
    const response = await request(app)
      .post(baseUrl)
      .send(mockedEmployerRegister);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).not.toHaveProperty("password");
    expect(response.status).toBe(201);
  });

  it("POST /register - NOT able to create an user with invalid avatar URL.", async () => {
    const response = await request(app)
      .post(baseUrl)
      .send({ ...mockedEmployerRegister, avatar_img: "invalid_url" });

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });

  it("POST /register - NOT able to create a user that already exists.", async () => {
    const response = await request(app)
      .post(baseUrl)
      .send(mockedEmployerRegister);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(409);
  });
});
