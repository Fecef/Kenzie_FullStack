import { updateProductService } from "../../services";

export const updateProductController = async (req, res) => {
    const data = await updateProductService(req.params.id, req.validatedBody);

    return res.status(200).json(...data);
}