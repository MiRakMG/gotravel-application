import { Router } from "express";
import { ContenirController } from "../Controllers/ContenirController";

export const contentRouter = Router()

contentRouter.post('', ContenirController.create)