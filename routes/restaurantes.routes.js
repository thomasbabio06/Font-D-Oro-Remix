// routes/restaurantes.routes.js
import restaurantesService from '../service/restaurantes.service.js';
import express from 'express';
const restaurantesRouter = express.Router();

restaurantesRouter.get('/', async (req, res) => {
    try {
        const { disponible, ciudad } = req.query;
        const filter = {};

        if (disponible !== undefined) {
            filter.disponible = disponible === 'true';
        }
        if (ciudad) {
            filter.ciudad = ciudad;
        }

        const restaurantes = await restaurantesService.getRest(filter);
        res.status(200).json(restaurantes);
    } catch (error) {
        console.error('Error al obtener restaurantes:', error);
        res.status(500).json({ error: 'Error al obtener restaurantes' });
    }
});

export default restaurantesRouter;
