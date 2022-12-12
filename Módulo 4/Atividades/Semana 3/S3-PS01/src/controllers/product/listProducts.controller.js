import { listProductsService } from "../../services";

export const listProductsController = async (req, res) => {
    const [status, data] = await listProductsService();

    return res.status(status).json(data);
}