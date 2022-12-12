import { database } from "../../database";

export const listProductCategoriesService = async () => {

    const queryResponse = await database
        .query(`SELECT * FROM categories;`)
        .then(res => res.rows);

    return [200, queryResponse];
};