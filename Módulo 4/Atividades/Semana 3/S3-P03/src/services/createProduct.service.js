import { db_conf } from "../database"

export const createProductService = async ({ name, price }) => {
    const queryResponse = await db_conf
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