import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contenir } from "../entity/Contenir";
import { Faire } from "../entity/Faire";

export class ContenirController {

    public static async create(req: Request, res: Response) 
    {
        const content = await AppDataSource.manager.save(Contenir, {
            ...req.body
        });

        return res.status(201).json(content);
    }

    public static async getPrestationByFaire(req:Request, res: Response) {
        const prestation = await AppDataSource.manager.find(Faire,{
            where: {
                id : parseInt(req.params.id)
            },
            relations: {
                prestation: true
            }
        })

        return res.status(200).json(prestation)
    }
}