import { listProductCategoryByIdService } from "../../services";

export const listProductCategoryByIdController = async (req, res) => {
    const data = await listProductCategoryByIdService(req.params.id);

    return res.status(200).json(...data);
}