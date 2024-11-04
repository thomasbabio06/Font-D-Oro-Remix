import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    dni: { type: String, required: true, unique: true }, // Si el DNI debe ser único
    contrasena: { type: String, required: true },
    telefono: { type: String, required: true },
});

export const userModel = mongoose.model('users', userSchema);
