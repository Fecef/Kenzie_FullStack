import { listProductCategoriesService } from "../../services";

export const listProductCategoriesController = async (req, res) => {
    const [status, data] = await listProductCategoriesService();

    return res.status(status).json(data);
}