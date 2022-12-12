import { listProductByIdService } from "../../services";

export const listProductByIdController = async (req, res) => {
    const data = await listProductByIdService(req.params.id);

    return res.status(200).json(...data);
}