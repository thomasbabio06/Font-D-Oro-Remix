// routes/reservas.routes.js
import express from 'express';
const router = express.Router();
import Reserva from '../dao/Models/reserva.model.js';
const reservasRouter = express.Router();
import { crearReserva, obtenerReservas, obtenerReservaPorId } from '../controllers/reserva.controller.js';

/* reservasRouter.post('/', async (req, res) => {
    try {
        console.log(req.body)
      await Reserva.create(req.body)
        
        res.status(201).json({ message: 'Reserva creada con éxito' });
    } catch (error) {
        console.error(error); // Imprimir el error en la consola del servidor
        res.status(400).json({ error: error.message });
    }
});
reservasRouter.get('/', async (req, res) => {
    try {
        const reservas = await Reserva.find(); // Recupera todas las reservas
        res.render('reservas', { reservas }); // Renderiza la vista con las reservas (asegúrate de que tengas una vista `reservas.ejs`)
    } catch (error) {
        console.error('Error al obtener las reservas:', error);
        res.status(500).send('Error al obtener las reservas');
    }
});  */
reservasRouter.post('/', crearReserva);
reservasRouter.get('/:id', obtenerReservas); // Cambia según cómo manejes las reservas
reservasRouter.get('/reservaConfirmada/:id', obtenerReservaPorId);

export default reservasRouter;
