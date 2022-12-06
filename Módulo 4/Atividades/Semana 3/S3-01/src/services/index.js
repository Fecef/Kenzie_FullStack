import { books } from "../database";

export const createBookService = (payload) => {
    const foundBook = books.find((b) => b.name === payload.name);

    if (foundBook) {
        return [409, { message: "Book already exists!" }];
    }

    payload.id = getLastId().toString();

    books.push(payload);

    return [201, payload];
};

export const retrieveBookService = (bookId) => {
    const book = books.find((b) => b.id === bookId);
    return book;
};

const getLastId = () => {
    const sortedBooks = books.sort(
        (bookA, bookB) => parseInt(bookA.id) > parseInt(bookB.id)
    );

    if (!sortedBooks.length) {
        return 1;
    }

    const lastId = sortedBooks.at(-1).id;

    return parseInt(lastId) + 1;
};