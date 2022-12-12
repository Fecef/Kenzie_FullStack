import { database } from "../../database";
import { AppError } from "../../errors";

export const createProductCategoryService = async ({ name }) => {

    const categories = await database.query("SELECT * FROM categories;").then(res => res.rows);

    const duplicate = categories.some(el => el.name === name);

    if (duplicate) throw new AppError("Category already exist.");

    const queryResponse = await database
        .query(
            `INSERT INTO categories (name)
            VALUES ($1)
            RETURNING *
            `,
            [name]
        )
        .then(res => res.rows);

    return queryResponse;
}