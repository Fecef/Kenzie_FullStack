import { updateProductCategoryService } from "../../services";

export const updateProductCategoryController = async (req, res) => {
    const data = await updateProductCategoryService(req.params.id, req.validatedBody);

    return res.status(200).json(...data);
}