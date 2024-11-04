import { Router } from "express";
import { userModel } from "../dao/Models/user.model.js"; // Ajusta la ruta
import passport from "passport";
import bcrypt from 'bcrypt';
import { loginUser } from "../controllers/session.controller.js";
const sessionRouter = Router();

sessionRouter.post('/register', async (req, res) => {

  console.log(req.body)
  const { nombre, dni, contrasena, telefono } = req.body;
  try {
      // Lógica para guardar el usuario
      bcrypt.hash(contrasena, 10, async (err,hash)=>{
        if (err){
          console.error(err)
          return err
        }
        const newUser = await userModel.create({ nombre, dni, contrasena : hash, telefono });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
      })
  } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error en el registro' });
  }
});

// Ruta para inicio de sesión
sessionRouter.post('/login', loginUser); // Asegúrate de que esta ruta esté definida


export { sessionRouter as userRoutes };