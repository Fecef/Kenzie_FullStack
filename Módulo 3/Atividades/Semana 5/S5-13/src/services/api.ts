import axios from "axios";

export const kenzieHub = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});
