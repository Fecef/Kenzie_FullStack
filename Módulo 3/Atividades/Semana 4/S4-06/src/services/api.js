import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5000,
});

export const apiGetPokemons = async () => {
  try {
    const res = await api.get("pokemon/?limit=151");
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};
