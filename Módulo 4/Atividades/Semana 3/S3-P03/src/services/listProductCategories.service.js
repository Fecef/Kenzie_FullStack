import { db_conf } from "../database"

export const listProductCategoriesService = async () => {
    const queryResponse = await db_conf
        .query(`SELECT * FROM categories;`)
        .then(res => res.rows);

    return [200, queryResponse];
};