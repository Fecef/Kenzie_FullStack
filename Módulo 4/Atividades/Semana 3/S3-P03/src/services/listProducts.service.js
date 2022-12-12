import { db_conf } from "../database"

export const listProductsService = async () => {
    const queryResponse = await db_conf
        .query(`SELECT * FROM products`)
        .then(res => res.rows);

    return [200, queryResponse];
}