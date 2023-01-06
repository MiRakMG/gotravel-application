import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entity/Client";
import { Prestation } from "../entity/Prestation";
import { Faire } from "../entity/Faire";

export class PrestationController {

    public static async getAllPrestation(req: Request, res: Response)
    {
        const prestation = await AppDataSource.manager.find(Prestation);

        return res.status(200).json({
            prestations: prestation
        })
    }

    public static async getPrestationPerClient(req: Request, res: Response)
    {
        const client = await AppDataSource.manager.findOne(Client, {
            where: {
                code_cli: parseInt(req.params.id)
            },
            relations: {
                prendre: {
                    date: true
                }
            }
        })

        if(!client) {

            return res.status(404).json({
                status: "Failure",
                message: "Not Found"
            })
        }

        return res.status(200).json(client)
    }


    public static async create(req: Request, res: Response) 
    {
        const prest = await AppDataSource.manager.save(Prestation, {
            ...req.body
        });

        return res.status(201).json(prest);
    }
}