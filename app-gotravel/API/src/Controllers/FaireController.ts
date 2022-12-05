import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entity/Client";
import { Date } from "../entity/Date";
import { Faire } from "../entity/Faire";

export class FaireController {

    public static async create(req: Request, res: Response) 
    {
        const date = await AppDataSource.manager.save(Date, {
            date: req.body.date
        });

        const did = await AppDataSource.manager.save(Faire, {
            ...req.body
        });

        return res.status(201).json(did);
    }
}