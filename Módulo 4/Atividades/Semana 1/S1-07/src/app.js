import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const cars = [];

app.post("/cars", (request, response) => {
  const { model, brand, year, color, plate } = request.body;

  cars.push({
    model,
    brand,
    year,
    color,
    plate,
    id: uuidv4(),
  });

  return response.status(201).json(...cars);
});

app.get("/cars", (request, response) => {
  response.send(cars);
});

app.listen(3000, () => console.log(`App rodando em http://localhost:3000`));
