import { Router } from "express";
import { TypeController } from "../Controllers/TypeController";

export const typeRouter = Router()

typeRouter.post('', TypeController.create)
typeRouter.patch('/:id', TypeController.update)