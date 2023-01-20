import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedAdminRegister, mockedUpdateAddress } from '../../mocks/integration/user.mock';
import { mockedProposalAccept, mockedProposalReject, mockedProposalSend, mockedProposalDone } from "../../mocks/integration/proposals.mock";
import { mockedEmployerRegister, mockedHiredRegister } from "../../mocks/integration/register.mock";
import { mockedLoginAdmin, mockedLoginEmployer, mockedLoginHired } from "../../mocks/integration/login.mock";

describe("/proposals", () => {
    let conn: DataSource;
    const baseUrl = "/proposals";

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((res) => (conn = res))
            .catch((err) => {
                console.error("Error during Data Source initialization.", err);
            });
        await request(app).post("/register").send(mockedHiredRegister);
        await request(app).post("/register").send(mockedEmployerRegister);
    });

    afterAll(async () => {
        await conn.destroy();
    });

    it("POST /proposals/hired/:id - NOT able to create proposal to a hired user without authentication.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const hiredAddress = await request(app).patch("/users/hired/address").send(mockedUpdateAddress).set("Authorization", `Bearer ${hiredLogin.body.token}`);
        const employerAddress = await request(app).patch("/users/employer/address").send(mockedUpdateAddress).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const hired = await request(app).get("/users/hired").set("Authorization", `Bearer ${hiredLogin.body.token}`);
        const employer = await request(app).get("/users/employers").set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).post(`${baseUrl}/hired/${hired.body.id}`).send(mockedProposalSend);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("POST /proposals/hired/:id - NOT able to create proposal to a hired user with invalid ID.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const hiredAddress = await request(app).patch("/users/hired/address").send(mockedUpdateAddress).set("Authorization", `Bearer ${hiredLogin.body.token}`);
        const employerAddress = await request(app).patch("/users/employer/address").send(mockedUpdateAddress).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const hired = await request(app).get("/users/hired").set("Authorization", `Bearer ${hiredLogin.body.token}`);
        const employer = await request(app).get("/users/employers").set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).post(`${baseUrl}/hired/invalid_id`).send(mockedProposalSend);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("POST /proposals/hired/:id - NOT able to create proposal to a hired user while not being a employer user.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const hiredAddress = await request(app).patch("/users/hired/address").send(mockedUpdateAddress).set("Authorization", `Bearer ${hiredLogin.body.token}`);
        const employerAddress = await request(app).patch("/users/employer/address").send(mockedUpdateAddress).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const hired = await request(app).get("/users/hired").set("Authorization", `Bearer ${hiredLogin.body.token}`);
        const employer = await request(app).get("/users/employers").set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).post(`${baseUrl}/hired/${hired.body.id}`).send(mockedProposalSend).set("Authorization", `Bearer ${hiredLogin.body.token}`);;

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("POST /proposals/hired/:id - ABLE to create proposal to a hired user.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const hiredAddress = await request(app).patch("/users/hired/address").send(mockedUpdateAddress).set("Authorization", `Bearer ${hiredLogin.body.token}`);
        const employerAddress = await request(app).patch("/users/employer/address").send(mockedUpdateAddress).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const hired = await request(app).get("/users/hired").set("Authorization", `Bearer ${hiredLogin.body.token}`);
        const employer = await request(app).get("/users/employers").set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).post(`${baseUrl}/hired/${hired.body.id}`).send(mockedProposalSend).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveProperty("rating");
        expect(response.body).toHaveProperty("hired");
        expect(response.status).toBe(201);
    });

    it("GET /proposals/hired/:id - NOT able to list all proposals from a hired user without authentication.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

        const hired = await request(app).get("/users/hired/").set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/hired/${hired.body.id}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/hired/:id - NOT able to list all proposals from a hired user with invalid ID.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

        const hired = await request(app).get("/users/hired/").set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/hired/invalid_id`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(404);
    });

    it("GET /proposals/hired/:id - NOT able to list all proposals from a hired user while not being a employer user.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

        const hired = await request(app).get("/users/hired/").set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/hired/${hired.body.id}`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/hired/:id - ABLE to list all proposals from a hired user.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

        const hired = await request(app).get("/users/hired/").set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/hired/${hired.body.id}`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveLength(1);
        expect(response.status).toBe(200);
    });

    it("GET /proposals/employer/:id - NOT able to list all proposals from a employer user without authentication.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const employer = await request(app).get("/users/employer").set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/employers/${employer.body.id}`)

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/employer/:id - NOT able to list all proposals from a employer user with invalid ID.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const hired = await request(app).get("/users/hired").set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/employers/${hired.body.id}`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(404);
    });

    it("GET /proposals/employer/:id - NOT able to list all proposals from a employer user while not being a employer user.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const hired = await request(app).get("/users/hired").set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/employers/${hired.body.id}`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/employer/:id - ABLE to list all proposals from a employer user.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const employer = await request(app).get("/users/employer").set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/employers/${employer.body.id}`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveLength(1);
        expect(response.status).toBe(200);
    });

    it("GET /proposals/hired - NOT able to list all proprosals of a hired logged user without authentication.", async () => {
        const response = await request(app).get(`${baseUrl}/hired`)

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/hired - NOT able to list all proprosals of a hired logged user while not being a hired user.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const response = await request(app).get(`${baseUrl}/hired`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/hired - ABLE to list all proprosals of a hired logged user.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

        const response = await request(app).get(`${baseUrl}/hired`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        expect(response.body).toHaveLength(1);
        expect(response.status).toBe(200);
    });

    it("GET /proposals/employer - NOT able to list all proprosals of a employer logged user without authentication.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const response = await request(app).get(`${baseUrl}/employers`)

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/employer - NOT able to list all proprosals of a employer logged user while not being an employer user.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

        const response = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/employer - ABLE to list all proprosals of a employer logged user.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const response = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveLength(1);
        expect(response.status).toBe(200);
    });

    it("PATCH /proposals/:id/hired - NOT able to change a proposal status without authentication.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const proposal = await request(app).get(`${baseUrl}/hired`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).patch(`${baseUrl}/${proposal.body[0].id}/hired`).send(mockedProposalAccept);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("PATCH /proposals/:id/hired - NOT able to change a proposal status while not being an hired user.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const proposal = await request(app).get(`${baseUrl}/hired`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).patch(`${baseUrl}/${proposal.body[0].id}/hired`).send(mockedProposalAccept).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("PATCH /proposals/:id/hired - NOT able to change a proposal status if it does not exists.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const proposal = await request(app).get(`${baseUrl}/hired`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).patch(`${baseUrl}/invalid_id/hired`).send(mockedProposalAccept).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(404);
    });

    it("PATCH /proposals/:id/hired - ABLE to change a proposal status.", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const proposal = await request(app).get(`${baseUrl}/hired`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).patch(`${baseUrl}/${proposal.body[0].id}/hired`).send(mockedProposalAccept).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        expect(response.body).toHaveProperty("rating");
        expect(response.body).toHaveProperty("hired");
        expect(response.status).toBe(200);
    });

    it("PATCH /proposals/:id/hired - NOT able to change a proposal status if it's different than \"Em andamento\".", async () => {
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const proposal = await request(app).get(`${baseUrl}/hired`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).patch(`${baseUrl}/${proposal.body[0].id}/hired`).send(mockedProposalReject).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("PATCH /proposals/:id/employer - NOT able to change a proposal status without authentication.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).patch(`${baseUrl}/${proposal.body[0].id}/employers`).send(mockedProposalDone)

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("PATCH /proposals/:id/employer - NOT able to change a proposal status while not being an employer user.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).patch(`${baseUrl}/${proposal.body[0].id}/employers`).send(mockedProposalDone).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("PATCH /proposals/:id/employer - ABLE to change a proposal status.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).patch(`${baseUrl}/${proposal.body[0].id}/employers`).send(mockedProposalDone).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveProperty("rating");
        expect(response.body).toHaveProperty("hired");
        expect(response.status).toBe(200);
    });

    it("PATCH /proposals/:id/employer - NOT able to change a proposal status if it's different than \"Em andamento\".", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).patch(`${baseUrl}/${proposal.body[0].id}/employers`).send(mockedProposalReject).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/:id - NOT able to list a proposal by ID without authentication.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/${proposal.body[0].id}`)

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("GET /proposals/:id - NOT able to list a proposal by ID with invalid ID.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/invalid_id}`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(404);
    });

    it("GET /proposals/:id - ABLE to list a proposal by ID.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).get(`${baseUrl}/${proposal.body[0].id}`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.status).toBe(200);
    });

    it("DELETE /proposals/:id - NOT able to delete a proposal by ID without authentication.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).delete(`${baseUrl}/${proposal.body[0].id}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("DELETE /proposals/:id - NOT able to delete a proposal by ID with invalid ID.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);

        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).delete(`${baseUrl}/invalid_id`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(404);
    });

    it("DELETE /proposals/:id - NOT able to delete a proposal by ID while not being an employer user.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);

        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const response = await request(app).delete(`${baseUrl}/${proposal.body[0].id}`).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toBe(401);
    });

    it("DELETE /proposals/:id - ABLE to delete a proposal by ID.", async () => {
        const employerLogin = await request(app).post("/login").send(mockedLoginEmployer);
        const hiredLogin = await request(app).post("/login").send(mockedLoginHired);
        const hired = await request(app).get("/users/hired").set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const newProposal = await request(app).post(`${baseUrl}/hired/${hired.body.id}`).send(mockedProposalSend).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const proposal = await request(app).get(`${baseUrl}/employers`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        const rejectedProposal = await request(app).patch(`${baseUrl}/${proposal.body[1].id}/hired`).send(mockedProposalReject).set("Authorization", `Bearer ${hiredLogin.body.token}`);

        const response = await request(app).delete(`${baseUrl}/${rejectedProposal.body.id}`).set("Authorization", `Bearer ${employerLogin.body.token}`);

        expect(response.status).toBe(204);
    });
});
