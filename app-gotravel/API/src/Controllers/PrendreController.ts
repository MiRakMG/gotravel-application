import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Prendre } from "../entity/Prendre";

export class PrendreController {

    public static async create(req: Request, res: Response) 
    {
        const take = await AppDataSource.manager.save(Prendre, {
            ...req.body
        });

        return res.status(201).json(take);
    }
}