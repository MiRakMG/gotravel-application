import { Router } from "express";
import { PrestationController } from "../Controllers/PrestationController";

export const prestRouter = Router()

prestRouter.get('/', PrestationController.getAllPrestation)
prestRouter.get('/:id', PrestationController.getPrestationPerClient)
prestRouter.get('/:wording/:price', PrestationController.getPrestationByWordingPrice)
prestRouter.post('', PrestationController.create)