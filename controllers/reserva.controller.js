import reservaService from "../service/reserva.service.js";
import Reserva from "../dao/Models/reserva.model.js";

export async function crearReserva(req, res) {
    try {
      const reserva = await reservaService.crearReserva(req.body);
      res.status(201).json(reserva);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la reserva' });
    }
  }
  
  export async function obtenerReservas(req, res) {
    try {
      const reservas = await reservaService.obtenerReservas();
      res.render('reservaConfirmada', { reservas }); // Renderiza la vista con las reservas
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener las reservas' });
    }
  }
  export async function obtenerReservaPorId(req, res) {
    const { id } = req.params;
    try {
        const reservaId = id.trim(); // Elimina espacios y nuevas líneas
        const reserva = await Reserva.findOne({ _id: reservaId }); // Busca la reserva por ID

        if (!reserva) {
            return res.status(404).send('Reserva no encontrada'); // Manejo de error si la reserva no se encuentra
        }

        res.render('reservaConfirmada', { reserva }); // Renderiza la vista con los datos de la reserva
    } catch (error) {
        console.error(error);
        res.status(500).send('Error del servidor'); // Manejo de error del servidor
    }


}