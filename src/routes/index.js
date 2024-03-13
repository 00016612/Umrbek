import controller from "../controller/index.js";
import { Router } from "express";

export const router = Router()
    .get('/food', controller.get)
    .post('/food', controller.post)
    .put('/food/:id', controller.update)
    .delete('/food/:id', controller.delete)