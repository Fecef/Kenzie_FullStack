import { books } from "../database";

export const verifyBookExistsMiddleware = (req, res, next) => {
    const book = books.find((b) => b.id === req.params.id);

    if (!book) {
        return res.status(404).json({ message: "Book not found." });
    }

    return next();
};