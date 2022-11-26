import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

export const userLogin = (data) =>
  api
    .post("/sessions", data)
    .then((res) => res.data)
    .catch((err) => err.response.data.message);

export const userSignup = (data) =>
  api
    .post("/users", data)
    .then((res) => res.data)
    .catch((err) => err.response.data.message);

export const userTokenValidation = (token) =>
  api
    .get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);

export const userCreateTech = (token, data) =>
  api
    .post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);

export const userUpdateTechStatus = (token, id, data) =>
  api
    .put(`/users/techs/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);

export const userEraseTech = (token, data) =>
  api.delete(`/users/techs/${data}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
