import { Router } from "express";
import { SaisonController } from "../Controllers/SaisonCOntroller";

export const saisonRouter = Router()

saisonRouter.post('', SaisonController.create)
saisonRouter.patch('/:id', SaisonController.update)