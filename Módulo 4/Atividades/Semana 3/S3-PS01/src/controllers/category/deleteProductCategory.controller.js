import { deleteProductCategoryService } from "../../services";

export const deleteProductCategoryController = async (req, res) => {
    await deleteProductCategoryService(req.params.id);

    return res.status(204).json();
}