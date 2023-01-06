import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Prendre } from "../entity/Prendre";
import { Date } from "../entity/Date";
export class PrendreController {

  public static async getPrendreId(req:Request, res: Response) {
    const hotel = await AppDataSource.manager.find(Prendre,{
        where: {
            id: parseInt(req.params.id)
        },
        relations: {
          hotel: true,
          saison: true,
          type: true
        }
    })

    return res.status(200).json(hotel)
}

  public static async create(req: Request, res: Response) {
    const findDate = await AppDataSource.manager.find(Date, {
      where: {
        date: req.body.date,
      },
    });
    if (findDate?.length === 0) {
      const date = await AppDataSource.manager.save(Date, {
        date: req.body.date,
      });
    }

    const take = await AppDataSource.manager.save(Prendre, {
      ...req.body,
    });

    return res.status(201).json(take);
  }
}
