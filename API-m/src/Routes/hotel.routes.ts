import { Router } from "express";
import { HotelController } from "../Controllers/HotelController";

export const hotelRouter = Router()

hotelRouter.get("", HotelController.getAllHotels)
hotelRouter.get("/:city",HotelController.getByCity)
hotelRouter.post('', HotelController.create)
hotelRouter.patch('/:id', HotelController.update)