export const createBookController = (req, res) => {
    const [status, data] = createBookService(req.body);
    return res.status(status).json(data);
};

export const listBooksController = (req, res) => {
    return res.status(200).json(books);
};

export const retrieveBookController = (req, res) => {
    const book = retrieveBookService(req.params.id);

    return res.status(200).json(book);
};