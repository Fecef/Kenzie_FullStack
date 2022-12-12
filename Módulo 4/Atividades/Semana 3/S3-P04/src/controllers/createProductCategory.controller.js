import { createProductCategoryService } from "../services/createProductCategory.service";

export const createProductCategoryController = async (req, res) => {
    const [status, data] = await createProductCategoryService(req.validatedBody);

    return res.status(status).json(data);
}