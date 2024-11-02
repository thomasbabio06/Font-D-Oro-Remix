import express from 'express';
import mongoose from 'mongoose';
import reservaRouter from './routes/reservas.routes.js';
import restaurantesRouter from './routes/restaurantes.routes.js'
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import ejs from "ejs"
const PORT = 8080;  
const app = express();
import path from 'path'; // Importa el módulo path aquí
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views')); 
app.use(express.json()); // Middleware para parsear el cuerpo de la solicitud como JSON
const mongoURI = "mongodb+srv://julietacortiet36:TA39GTSP2R7Xppd4@cluster0.zvr2c.mongodb.net/Reservas?retryWrites=true&w=majority&appName=Cluster0"
  mongoose.connect(mongoURI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error de conexión:', err));
  app.get('/', (req, res) =>{
    res.render('index');
  })
  
 
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


const httpServer = app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    }); 