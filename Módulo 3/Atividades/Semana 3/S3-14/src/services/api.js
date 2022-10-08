import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

export const login = (data) =>
  api
    .post("/sessions", {
      ...data,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data.message);

export const signup = (data) =>
  api
    .post("/users", {
      ...data,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data.message);
