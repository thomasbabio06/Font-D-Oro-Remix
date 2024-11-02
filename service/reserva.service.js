import ReservaModel from '../dao/Models/reserva.model.js'; // Asegúrate de que este modelo esté exportando correctamente

class ReservaService {
    async crearReserva(data) {
        const reserva = new ReservaModel(data); // Cambiar aquí
        return await reserva.save();
    }

    async obtenerReservasPorRestaurante(restauranteId) {
        return await ReservaModel.find({ restauranteId }); // Cambiar aquí
    }

    async obtenerReservas() {
        return await ReservaModel.find(); // Añadir este método para obtener todas las reservas
    }
    async obtenerReservaPorId(id) {
      return await ReservaModel.findById(id); // Suponiendo que usas Mongoose para interactuar con MongoDB
  }
}

export default new ReservaService();
