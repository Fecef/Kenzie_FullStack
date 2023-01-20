import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  mockedAdminRegister,
  mockedEmployerRegister,
  mockedHiredRegister,
} from "../../mocks/integration/register.mock";
import {
  mockedCreateService,
  mockedUpdateAddress,
  mockedUpdateUser,
  mockedUpdateServiceUser,
} from "../../mocks/integration/user.mock";
import {
  mockedLoginAdmin,
  mockedLoginEmployer,
  mockedLoginHired,
} from "../../mocks/integration/login.mock";

describe("/hireds", () => {
  let conn: DataSource;
  const baseUrl = "/users/hired";

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (conn = res))
      .catch((err) => {
        console.error("Error during Data Source initialization.", err);
      });
    await request(app).post("/register").send(mockedHiredRegister);
    await request(app).post("/register").send(mockedEmployerRegister);
    await request(app).post("/admin").send(mockedAdminRegister);
    const admin = await request(app)
      .post("/admin/login")
      .send(mockedLoginAdmin);
    const token = `Bearer ${admin.body.token}`;
    await request(app)
      .post("/services")
      .send(mockedCreateService)
      .set("Authorization", token);
  });

  afterAll(async () => {
    await conn.destroy();
  });

  // LISTAR TODOS OS USUARIOS HIRED

  it("GET /hired/all - Able to list all hired users.", async () => {
    const response = await request(app).get(`${baseUrl}/all`);

    expect(response.body).toHaveLength(1);
    expect(response.status).toBe(200);
  });

  // LISTAR O USUARIO HIRED LOGADO

  it("GET /hired - Not be able to list a hired user logged without authentication.", async () => {
    const response = await request(app).get(baseUrl);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("GET /hired - Not be able to list a hired user if logged not a hired.", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .get(baseUrl)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("GET /hired - Able to list a hired user logged.", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

    const response = await request(app)
      .get(baseUrl)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("gender");
    expect(response.body).toHaveProperty("avatar_img");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("address");
    expect(response.body).not.toHaveProperty("password");
    expect(response.status).toBe(200);
  });

  // LISTAR O USUARIO HIRED PASSADO PELO PARAMS IDs

  it("GET /hired/:id - Not be able to list a hired user without authentication.", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

    const user = await request(app).get(baseUrl).set("Authorization", token);

    const response = await request(app).get(`${baseUrl}/${user.body.id}`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("GET /hired/:id - Not be able to list a hired if params id do not exists.", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .get(`${baseUrl}/naoexiste`)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(404);
  });

  it("GET /hired/:id - Not be able to list a hired user if logged not a employer.", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

    const userHired = await request(app)
      .get(baseUrl)
      .set("Authorization", token);

    const response = await request(app)
      .get(`${baseUrl}/${userHired.body.id}`)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("GET /hired/:id - Able to list a hired user.", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);
    const token = `Bearer ${employerLogin.body.token}`;

    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
    const userHired = await request(app)
      .get(baseUrl)
      .set("Authorization", `Bearer ${hiredLogin.body.token}`);

    const response = await request(app)
      .get(`${baseUrl}/${userHired.body.id}`)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("gender");
    expect(response.body).toHaveProperty("avatar_img");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("address");
    expect(response.body).not.toHaveProperty("password");
    expect(response.status).toBe(200);
  });

  // EDITAR DADOS DO USUARIO HIRED

  it("PATCH /hired - Not be able to update user without authentication", async () => {
    const response = await request(app)
      .patch(baseUrl)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /hired - Not be able to update user if not being hired", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .patch(baseUrl)
      .set("Authorization", token)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /hired - Able to update a employer data.", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

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

  // EDITAR ENDEREÇO DO USUARIO HIRED

  it("PATCH /hired/address - Not be able to update user's address without authentication", async () => {
    const response = await request(app)
      .patch(`${baseUrl}/address`)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /hired/address - Not be able to update user if not being hired", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .patch(`${baseUrl}/address`)
      .set("Authorization", token)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /hired/address - Able to update a hired data.", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

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

  // EDITAR SERVIÇOS DO USUARIO HIRED

  it("PATCH /hired/services - Not be able to update user's services without authentication", async () => {
    const response = await request(app)
      .patch(`${baseUrl}/services`)
      .send(mockedUpdateAddress);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /hired/services - Not be able to update user if not being hired", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .patch(`${baseUrl}/services`)
      .set("Authorization", token)
      .send(mockedUpdateServiceUser);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("PATCH /hired/services - Able to update user's services", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

    const response = await request(app)
      .patch(`${baseUrl}/services`)
      .set("Authorization", token)
      .send(mockedUpdateServiceUser);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("avatar_img");
    expect(response.body).toHaveProperty("gender");
    expect(response.body).toHaveProperty("services");
    expect(response.body).toHaveProperty("address");
    expect(response.status).toBe(200);
  });

  // DELETAR O USUARIO HIRED

  it("DELETE /hired - Not be able to delete user without authentication", async () => {
    const response = await request(app).delete(baseUrl);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("DELETE /hired - Not be able to delete user if not being hired", async () => {
    const employerLogin = await request(app)
      .post("/login")
      .send(mockedLoginEmployer);

    const token = `Bearer ${employerLogin.body.token}`;

    const response = await request(app)
      .delete(baseUrl)
      .set("Authorization", token);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  it("DELETE /hired - Able to delete user", async () => {
    const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

    const token = `Bearer ${hiredLogin.body.token}`;

    const response = await request(app)
      .delete(baseUrl)
      .set("Authorization", token);

    expect(response.status).toBe(204);
  });
});
