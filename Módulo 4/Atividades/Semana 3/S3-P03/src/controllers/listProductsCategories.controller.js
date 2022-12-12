import { listProductCategoriesService } from "../services";

export const listProductCategoriesController = async (req, res) => {
    const [status, data] = await listProductCategoriesService(req.body);

    return res.status(status).json(data);
}