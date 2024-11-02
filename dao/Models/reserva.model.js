import mongoose from 'mongoose';

const reservaSchema = new mongoose.Schema({
    mesa: { type: Number, required: true },  // Asegúrate de que esta línea esté presente
    tipoPago: { type: String, required: true },
    fecha: { type: Date, required: true },
    cantPersonas: { type: Number, required: true },
/*     restaurantId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Restaurantes' }, // Asegúrate de que este campo sea correcto
 */});

const ReservaModel = mongoose.model('reservas', reservaSchema);
export default ReservaModel;
