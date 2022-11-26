import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  timeout: 5000,
});

export const getOrg = (owner, repos) => {
  return api.get(`https://api.github.com/repos/${owner}/${repos}`);
};
