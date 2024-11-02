// routes/reservas.routes.js
import express from 'express'; // Cambia require a import
import ReservaModel from '../dao/Models/reserva.model.js';
const router = express.Router();

// Define tus rutas aquí, por ejemplo:
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
      await ReservaModel.create(req.body)
        
        res.status(201).json({ message: 'Reserva creada con éxito' });
    } catch (error) {
        console.error(error); // Imprimir el error en la consola del servidor
        res.status(400).json({ error: error.message });
    }
});

export default router;
