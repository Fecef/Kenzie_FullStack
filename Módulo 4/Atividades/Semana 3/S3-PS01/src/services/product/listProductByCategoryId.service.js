import { database } from "../../database";
import { AppError } from "../../errors";

export const listProductByCategoryIdService = async (categoryId) => {

    const categories = await database.query("SELECT * FROM categories;").then(res => res.rows);

    const idFound = categories.some(el => el.id === categoryId);

    if (!idFound) throw new AppError("Category ID not found.", 404);

    const queryResponse = await database
        .query(
            `SELECT p.name, p.price, c.name category FROM products p
            INNER JOIN categories c ON c.id = p.category_id
            WHERE p.category_id = $1;`,
            [categoryId]
        )
        .then(res => res.rows);

    return [queryResponse];
}