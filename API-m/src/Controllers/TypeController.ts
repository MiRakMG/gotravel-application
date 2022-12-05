import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Type } from "../entity/Type";

export class TypeController {

    public static async create(req: Request, res: Response) 
    {
        const type = await AppDataSource.manager.save(Type, {
            ...req.body
        });

        return res.status(201).json(type);
    }

    public static async update(req: Request, res: Response) 
    {
        await AppDataSource.manager.update(Type, {code_type: req.params.id}, {...req.body});

        return res.status(201).json({
            status: "Success",
            message: "Updated successfully"
        });
    }
}