import { Router } from "express";
import { ClientController } from "../Controllers/ClientController";
import { PrestationController } from "../Controllers/PrestationController";

export const clientRouter = Router()

clientRouter.get('/:id', PrestationController.getPrestationPerClient)
clientRouter.post('', ClientController.create)
clientRouter.delete('/:id', ClientController.remove)
clientRouter.patch(':id', ClientController.update)