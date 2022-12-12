import { createProductCategoryService } from "../services/createProductCategory.service";

export const createProductCategoryController = async (req, res) => {
    const [status, data] = await createProductCategoryService(req.body);

    return res.status(status).json(data);
}