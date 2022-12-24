import { Request, Response } from "express";
import { createCategoryService, listCategoriesService, listPropertiesByCategoryService } from "../services";

export const createCategoryController = async (req: Request, res: Response) => {
    const data = await createCategoryService(req.body);

    return res.status(201).json(data);
}

export const listCategoriesController = async (req: Request, res: Response) => {
    const data = await listCategoriesService();

    return res.status(200).json(data);
}

export const listPropertiesByCategoryController = async (req: Request, res: Response) => {
    const data = await listPropertiesByCategoryService(req.params.id);

    return res.status(200).json(...data);
}