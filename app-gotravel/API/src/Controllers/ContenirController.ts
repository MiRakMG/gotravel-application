import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contenir } from "../entity/Contenir";

export class ContenirController {

    public static async create(req: Request, res: Response) 
    {
        const content = await AppDataSource.manager.save(Contenir, {
            ...req.body
        });

        return res.status(201).json(content);
    }
}