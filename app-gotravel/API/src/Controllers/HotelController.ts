import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Hotel } from "../entity/Hotel";

export class HotelController {

    public static async create(req: Request, res: Response) 
    {
        const client = await AppDataSource.manager.save(Hotel, {
            ...req.body
        });

        return res.status(201).json(client);
    }

    public static async update(req: Request, res: Response) 
    {
        await AppDataSource.manager.update(Hotel, {code_hotel: req.params.id}, {...req.body});

        return res.status(201).json({
            status: "Success",
            message: "Updated successfully"
        });
    }
}