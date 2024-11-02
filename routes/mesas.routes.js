// routes/mesas.routes.js
import express from 'express';
import mesasController from '../controllers/mesa.controller.js';

const mesasRouter = express.Router();

// Ruta para obtener todas las mesas
mesasRouter.get('/', mesasController.getAllMesas);

// Ruta para obtener una mesa por ID
mesasRouter.get('/reservaConfirmada/:id', mesasController.getMesaById);

export default mesasRouter;
