import "express-async-errors";
import express from "express";
import routes from "./routes";
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware";

const app = express();

app.use(express.json());

app.use(routes);
app.use(errorHandlerMiddleware)

export default app;
