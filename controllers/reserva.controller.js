import reservaService from "../service/reserva.service.js";

async function crearReserva(req, res) {
    try {
      const reserva = await reservaService.crearReserva(req.body);
      res.status(201).json(reserva);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la reserva' });
    }
  }
  
  async function obtenerReservas(req, res) {
    try {
      const { restauranteId } = req.params;
      const reservas = await reservaService.obtenerReservasPorRestaurante(restauranteId);
      res.json(reservas);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las reservas' });
    }
  }

module.exports = { crearReserva, obtenerReservas };
