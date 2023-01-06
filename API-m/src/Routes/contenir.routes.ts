import { Router } from "express";
import { ContenirController } from "../Controllers/ContenirController";

export const contentRouter = Router()

contentRouter.get("/:id", ContenirController.getPrestationByFaire)
contentRouter.post('', ContenirController.create)