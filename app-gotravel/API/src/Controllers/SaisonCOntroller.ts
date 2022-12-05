import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Saison } from "../entity/Saison";

export class SaisonController {

    public static async create(req: Request, res: Response) 
    {
        const client = await AppDataSource.manager.save(Saison, {
            ...req.body
        });

        return res.status(201).json(client);
    }

    public static async update(req: Request, res: Response) 
    {
        await AppDataSource.manager.update(Saison, {code_saison: req.params.id}, {...req.body});

        return res.status(201).json({
            status: "Success",
            message: "Updated successfully"
        });
    }
}