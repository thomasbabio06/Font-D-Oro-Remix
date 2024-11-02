// services/reservaService.js
import ReservaModel from '../dao/Models/reserva.model.js'; // Usa import en lugar de require

class ReservaService {
    async crearReserva(data) {
      const reserva = new Reserva(data);
      return await reserva.save();
    }
  
    async obtenerReservasPorRestaurante(restauranteId) {
      return await Reserva.find({ restauranteId });
    }
  }
export default new ReservaService();