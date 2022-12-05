import { Router } from "express";
import { HotelController } from "../Controllers/HotelController";

export const hotelRouter = Router()

hotelRouter.post('', HotelController.create)
hotelRouter.patch('/:id', HotelController.update)