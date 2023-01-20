import request from "supertest";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import app from "../../../app";
import {
  mockedEmployerRegister,
  mockedHiredRegister,
} from "../../mocks/integration/register.mock";
import {
  mockedLoginEmployer,
  mockedLoginHired,
} from "../../mocks/integration/login.mock";
import {
  mockedUpdateAddress,
  mockedUpdateUser,
} from "../../mocks/integration/user.mock";

describe("/employers", () => {
  let conn: DataSource;
  const baseUrl = "/users/employer";

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (conn = res))
      .catch((err) => {
        console.error("Error during Data Source initialization.", err);
      });
    await request(app).post("/register").send(mockedEmployerRegister);
    await request(app).post("/register").send(mockedHiredRegister);
  });

  afterAll(async () => {
    await conn.destroy();
  });

  // EDITAR DADOS DO USUARIO EMPLOYER

  it("PATCH /employers - Not be able to update user without authentication", async () => {
    const response = await request(app)
      .patch(baseUrl)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /employers - Not be able to update user if not being employer", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

    const response = await request(app)
      .patch(baseUrl)
      .set("Authorization", token)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /employers - Able to update a employer data.", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .patch(baseUrl)
      .set("Authorization", token)
      .send(mockedUpdateUser);

    expect(response.body).toHaveProperty("gender");
    expect(response.body).toHaveProperty("avatar_img");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("name");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).not.toHaveProperty("address");
    expect(response.status).toBe(200);
  });

  // EDITAR ENDEREÇO DO USUARIO EMPLOYER

  it("PATCH /employers/address - Not be able to update user's address without authentication", async () => {
    const response = await request(app)
      .patch(`${baseUrl}/address`)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /hired/address - Not be able to update user if not being hired", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

    const response = await request(app)
      .patch(`${baseUrl}/address`)
      .set("Authorization", token)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /employers/address - Able to update a employer data.", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .patch(`${baseUrl}/address`)
      .set("Authorization", token)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("gender");
    expect(response.body).toHaveProperty("avatar_img");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("id");
    expect(response.body).not.toHaveProperty("password");
    expect(response.status).toBe(200);
  });

  // LISTAR OS DADOS DO EMPLOYER LOGADO

  it("GET /employers - Not be able to list employer users without authentication.", async () => {
    const response = await request(app).get(baseUrl);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("GET /employers - Not be able to list a employer users if logged not a employer", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

    const response = await request(app)
      .get(baseUrl)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("GET /employers - Must be able to list all employer users.", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .get(baseUrl)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body.name).toEqual("employer");
    expect(response.body).toHaveProperty("email");
    expect(response.body.email).toEqual("employer@mail.com");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toHaveProperty("avatar_img");
    expect(response.body).toHaveProperty("address");
    expect(response.status).toBe(200);
  });

  // DELETAR O USUARIO EMPLOYER

  it("DELETE /employers - Not be able to delete user without authentication", async () => {
    const response = await request(app).delete(baseUrl);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("DELETE /employers - Not be able to delete user if not being employer", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

    const response = await request(app)
      .delete(baseUrl)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("DELETE /employers - Able to delete user", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .delete(baseUrl)
      .set("Authorization", token);

    expect(response.status).toBe(204);
  });
});
