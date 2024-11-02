import mongoose from 'mongoose';
import { type } from 'os';
const collection = 'restaurantes'
const restaurantSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ciudad: { type: String, required: true },
    direccion: { type: String, required: true },
    disponible: { type: Boolean, default: true },
    image: { type: String, required: true }, // Campo para la URL de la imagen
    
});

// Asegúrate de que el nombre del modelo sea 'Restaurant' (en singular) o el que desees.
export const restaurantModel = mongoose.model(collection, restaurantSchema);