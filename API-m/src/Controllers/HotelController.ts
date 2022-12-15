import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Hotel } from "../entity/Hotel";

export class HotelController {

    public static async getAllHotels(req: Request, res: Response) 
    {
        const hotels = await AppDataSource.manager.find(Hotel, {
            relations: {
                content: {
                    type: true,
                    season: true
                }
            },
        })

        return res.json(hotels)
    }

    public static async getByCity(req:Request,res: Response) {
        const hotel = await AppDataSource.manager.find(Hotel,{
            where: {
                city: req.params.city
            }
        })

        return res.status(200).json(hotel)
    }

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