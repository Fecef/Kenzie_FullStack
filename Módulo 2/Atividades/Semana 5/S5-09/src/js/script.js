import { Api } from "../models/Api.js";

Api.createUser({
  name: "meuNome",
  email: "email@email.com",
  password: "1111",
});

Api.createRecipe({
  name: "Batata cozida",
  ingredients: ["Batata", "Água Quente", "Sal"],
  description: "Uma batata muito bem cozida, amassada e pronta para comer",
});
