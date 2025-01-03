import express from 'express';
import mongoose from 'mongoose';
import reservaRouter from './routes/reservas.routes.js';
import restaurantesRouter from './routes/restaurantes.routes.js'
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import ejs from "ejs"
import { userRoutes } from './routes/session.routes.js';
import mesasRouter from './routes/mesas.routes.js';
import Reserva from './dao/Models/reserva.model.js';
const PORT = 3000;  
const app = express();
import passport from 'passport';
import session from 'express-session';

import path from 'path'; // Importa el módulo path aquí
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views'); // Asegúrate de que esta línea esté presente

app.use(express.static('public'))
app.use(express.static(path.join(__dirname)));
app.use(express.json()); // Middleware para parsear el cuerpo de la solicitud como JSON
const mongoURI = "mongodb+srv://julietacortiet36:TA39GTSP2R7Xppd4@cluster0.zvr2c.mongodb.net/Reservas?retryWrites=true&w=majority&appName=Cluster0"
  mongoose.connect(mongoURI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error de conexión:', err));
  app.get('/', (req, res) =>{
    res.render('index');
  })
  
  app.use(session({
    secret: 'tu_secreto', // Cambia a una cadena secreta segura
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Cambia a true si usas HTTPS
  }));
  

  app.use(passport.initialize());
  app.use(passport.session());
//Rutas
app.get('/filtrarPorCategoria', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'filtrarPorCategoria.html'));
});
app.get('/filtroRestaurante', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'filtroRestaurante.html'));
});
app.get('/reservaCliente/:rId', (req, res) => {
  let { rId } = req.params; 
  res.render('reservaCliente', {rId});
});
app.use('/api/restaurantes', restaurantesRouter); // Configura las rutas para restaurantes
app.use('/api/restaurantes/:rId', restaurantesRouter); // Configura las rutas para restaurantes
app.use('/api/reservas', reservaRouter); // Mount the route with a prefix
app.use('/api/mesas', mesasRouter); // Asegúrate de que esta ruta esté disponible
app.use('/reservas/reservaConfirmada', reservaRouter); // Configura las rutas para restaurantes
app.use('/api', userRoutes);
app.use('/api/login', userRoutes);
app.get('/', (req, res) => {
  res.sendFile('public/index.html'); // Asegúrate de que la ruta al index sea correcta
});

// Ruta para mostrar reservas en una vista
app.get('/reservas', async (req, res) => {
  try {
      const reservas = await Reserva.find(); // Recupera todas las reservas
      res.render('reservaConfirmada', { reservas }); // Renderiza la vista con las reservas
  } catch (error) {
      console.error('Error al obtener las reservas:', error);
      res.status(500).send('Error al obtener las reservas');
  }
});
const httpServer = app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    }); 