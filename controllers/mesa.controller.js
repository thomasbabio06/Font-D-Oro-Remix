// controllers/mesas.controller.js
import Mesas from "../dao/Models/mesa.model.js";

class MesasController {
    // Método para obtener todas las mesas
    async getAllMesas(req, res) {
        try {
            const mesas = await Mesas.find(); // Obtener todas las mesas
            res.status(200).json(mesas);
        } catch (error) {
            console.error('Error al obtener mesas:', error);
            res.status(500).json({ error: 'Error al obtener mesas' });
        }
    }

    // Método para obtener una mesa por ID
    async getMesaById(req, res) {
        const { id } = req.params; // Obtener el ID de los parámetros de la solicitud
        try {
            const mesa = await Mesas.findById(id); // Buscar la mesa por ID
            if (!mesa) {
                return res.status(404).json({ error: 'Mesa no encontrada' });
            }
            res.status(200).json(mesa);
        } catch (error) {
            console.error('Error al obtener la mesa por ID:', error);
            res.status(500).json({ error: 'Error al obtener la mesa por ID' });
        }
    }
}

export default new MesasController();
