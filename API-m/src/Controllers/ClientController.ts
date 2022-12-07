import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Client } from "../entity/Client";

export class ClientController {

    public static async getAllClient(req: Request, res: Response)
    {
        const clients = await AppDataSource.manager.find(Client, {
            relations: {
                prendre: {
                    date: true
                }
            }
        })

        return res.status(200).json(clients)
    }

    public static async create(req: Request, res: Response) 
    {
        const client = await AppDataSource.manager.save(Client, {
            ...req.body
        });

        return res.status(201).json(client);
    }

    public static async remove(req: Request, res: Response)
    {
        await AppDataSource.manager.delete(Client, {
            code_cli: req.params.id
        })

        return res.status(200).json({
            status: "Success",
            message: "Client deleted successfully"
        })
    }

    public static async update(req: Request, res: Response) 
    {
        await AppDataSource.manager.update(Client, {code_cli: req.params.id}, {...req.body});

        return res.status(201).json({
            status: "Success",
            message: "Updated successfully"
        });
    }
}