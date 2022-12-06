import { Router } from "express";
import { createBookController, listBooksController, retrieveBookController } from "../controllers";
import { verifyBookExistsMiddleware } from "../middlewares";

const bookRoute = Router();

bookRoute.post("/books", createBookController);
bookRoute.get("/books", listBooksController);
bookRoute.get("/books/:id", verifyBookExistsMiddleware, retrieveBookController);