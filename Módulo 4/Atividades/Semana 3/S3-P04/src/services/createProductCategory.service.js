import { database } from "../database"

export const createProductCategoryService = async ({ name }) => {
    const queryResponse = await database
        .query(
            `INSERT INTO categories (name)
            VALUES ($1)
            RETURNING *
            `,
            [name]
        )
        .then(res => res.rows);

    return [201, ...queryResponse];
}