import mongoose from 'mongoose';
const collection = 'mesas'

// Definición del esquema de reserva

const MesasSchema = new mongoose.Schema({
  numeroMesa: { type: Number, required: true, unique: true },
  disponible: { type: Boolean, default: true }, // Si la mesa está disponible
  horarios: [{ type: String }], // Array para almacenar múltiples horarios

});



const Mesas = mongoose.model(collection, MesasSchema);
export default Mesas;