import { Router } from "express";
import { FaireController } from "../Controllers/FaireController";

export const faireRouter = Router()

faireRouter.post('', FaireController.create)