import { createProductCategoryService } from "../../services";

export const createProductCategoryController = async (req, res) => {
    const data = await createProductCategoryService(req.validatedBody);

    return res.status(201).json(...data);
}