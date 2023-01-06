import { Router } from "express";
import { PrendreController } from "../Controllers/PrendreController";

export const prendreRouter = Router()

prendreRouter.get("/:id", PrendreController.getPrendreId)
prendreRouter.post('', PrendreController.create)