// services/reservaService.js
import ReservaModel from '../dao/Models/reserva.model.js'; // Usa import en lugar de require
class Reserva{


// Función para crear una nueva reserva
async crearReserva(reservaData = {}) {
    try {
        const nuevaReserva = new ReservaModel(reservaData); // Crear instancia del modelo
        await nuevaReserva.save(); // Guardar la reserva en la base de datos
        return nuevaReserva; // Retornar la nueva reserva
    } catch (error) {
        throw new Error('Error al crear la reserva: ' + error.message);
    }
}
}
export default new Reserva();
