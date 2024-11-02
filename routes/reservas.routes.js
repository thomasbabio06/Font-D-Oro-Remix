// routes/reservas.routes.js
import express from 'express';
const router = express.Router();
import Reserva from '../dao/Models/reserva.model.js';

const reservasRouter = express.Router();

reservasRouter.post('/', async (req, res) => {
    try {
        console.log(req.body)
      await Reserva.create(req.body)
        
        res.status(201).json({ message: 'Reserva creada con éxito' });
    } catch (error) {
        console.error(error); // Imprimir el error en la consola del servidor
        res.status(400).json({ error: error.message });
    }
});

export default reservasRouter;
