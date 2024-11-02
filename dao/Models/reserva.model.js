import mongoose from 'mongoose';
const collection = 'reserva'

// Definición del esquema de reserva

const ReservaSchema = new mongoose.Schema({
  numeroMesa: Number,
  cantidadPersonas: Number,
  fecha: Date,
  tipoPago: String,
  restauranteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurante', // Asegúrate de que coincida con el nombre del modelo de Restaurante
    required: true
  }
});



const Reserva = mongoose.model(collection, ReservaSchema);
export default Reserva;