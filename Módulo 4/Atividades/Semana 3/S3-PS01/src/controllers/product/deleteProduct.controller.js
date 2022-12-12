import { deleteProductService } from "../../services";

export const deleteProductController = async (req, res) => {
    await deleteProductService(req.params.id);

    return res.status(204).json();
}