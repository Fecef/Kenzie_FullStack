import axios from "axios";
const token = localStorage.getItem("@TOKEN");
export const api = axios.create({
  baseURL: "https://m3-flashcards-app.herokuapp.com/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
},
});
