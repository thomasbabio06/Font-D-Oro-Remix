
import bcrypt from 'bcrypt';
import { userModel } from '../dao/Models/user.model.js';
import jwt from 'jsonwebtoken'

// Registro de usuario
export const registerUser = async (req, res) => {
  const { nombre, dni, contrasena, telefono } = req.body;

  if (!nombre || !dni || !contrasena || !telefono) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }
  console.log(req.body)
  try {
      // Verificar si el usuario ya existe
      const existingUser = await userModel.findOne({ dni });
      if (existingUser) {
          return res.status(400).json({ message: 'El usuario ya existe' });
      }

      const newUser = await userModel.create({ nombre, dni, contrasena, telefono });
      await newUser.save();
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
      console.error('Error al registrar el usuario:', error); // Mostrar error en la consola del servidor
      res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
  }
};

// Login de usuario
export const loginUser = async (req, res) => {
  const { dni, contrasena } = req.body;

  try {
      const user = await userModel.findOne({ dni });
      if (!user) {
          return res.status(401).json({ message: 'Usuario no encontrado' });
      }

      const isMatch = await bcrypt.compare(contrasena, user.contrasena); // Compara la contraseña
      if (!isMatch) {
          return res.status(401).json({ message: 'Contraseña incorrecta' });
      }

      // Generar token si la autenticación es exitosa
      const token = jwt.sign({ id: user._id }, 'tu_secreto', { expiresIn: '1h' });
      res.status(200).json({ token });
  } catch (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};
