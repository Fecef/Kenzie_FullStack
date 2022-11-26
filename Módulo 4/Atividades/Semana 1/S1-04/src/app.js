const express = require("express");

const app = express();

app.get('/', (request, response) => {
    return response.send("Hello World!");
});

app.listen(3000, () => console.log(`App rodando em http://localhost:3000`));