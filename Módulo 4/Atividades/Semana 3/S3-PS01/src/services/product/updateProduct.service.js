import { database } from "../../database";
import { AppError } from "../../errors";

export const updateProductService = async (productId, payload) => {

    const products = await database.query("SELECT * FROM products;").then(res => res.rows);

    const idFound = products.some(el => el.id === productId);

    if (!idFound) throw new AppError("Product ID not found.", 404);

    let query = "UPDATE products SET";
    const keys = Object.keys(payload);
    const values = Object.values(payload);

    keys.forEach((key, index) => {
        query += ` ${key} = \$${index += 1},`
        console.log(query);
    });

    query = query.slice(0, -1);
    query += ` WHERE id = \$${keys.length += 1} RETURNING *`;

    const queryResponse = await database
        .query(query, [...values, productId])
        .then(res => res.rows);


    return queryResponse;
}