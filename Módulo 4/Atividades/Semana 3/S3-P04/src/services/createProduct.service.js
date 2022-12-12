import { database } from "../database"

export const createProductService = async ({ name, price }) => {
    const queryResponse = await database
        .query(
            `INSERT INTO products (name, price)
            VALUES ($1, $2)
            RETURNING *
            `,
            [name, price]
        )
        .then(res => res.rows);

    return [201, ...queryResponse];
}