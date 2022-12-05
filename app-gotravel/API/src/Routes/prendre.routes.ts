import { Router } from "express";
import { PrendreController } from "../Controllers/PrendreController";

export const prendreRouter = Router()

prendreRouter.post('', PrendreController.create)