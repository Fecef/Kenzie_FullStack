import { db_conf } from "../database"

export const createProductCategoryService = async ({ name }) => {
    const queryResponse = await db_conf
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