import { listProductByCategoryIdService } from "../../services";

export const listProductByCategoryIdController = async (req, res) => {
    const [data] = await listProductByCategoryIdService(req.params.id);

    return res.status(200).json(data);
}