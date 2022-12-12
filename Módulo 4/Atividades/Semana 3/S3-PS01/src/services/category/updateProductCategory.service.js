import { database } from "../../database";
import { AppError } from "../../errors";

export const updateProductCategoryService = async (categoryId, { name }) => {

    const categories = await database.query("SELECT * FROM categories;").then(res => res.rows);

    const idFound = categories.some(el => el.id === categoryId);

    if (!idFound) throw new AppError("Category ID not found.", 404);

    const queryResponse = await database
        .query("UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;", [name, categoryId])
        .then(res => res.rows);

    return queryResponse;
}