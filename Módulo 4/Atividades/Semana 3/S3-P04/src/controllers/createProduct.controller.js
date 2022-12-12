import { createProductService } from "../services";

export const createProductController = async (req, res) => {
    const [status, data] = await createProductService(req.validatedBody);

    return res.status(status).json(data);
}