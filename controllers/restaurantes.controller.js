import { restaurantModel } from "../dao/Models/restaurantes.model.js";
class Restaurantes {
  async getRest (req, res)  {
    try {
        const restaurantes = await restaurantModel.find();
        res.json(restaurantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

  async getRestById(req, res) {
    let { rId } = req.params; 
    rId = rId.trim(); // Limpiar espacios y caracteres no válidos
    console.log(rId)

    try {
        const restaurante = await restaurantModel.findById(rId);
      
        res.status(200).json(restaurante);
    } catch (error) {
        console.error('Error al obtener el restaurante por ID:', error.message);
        if (error.message === 'Restaurante no encontrado') {
            return res.status(404).json({ error: 'Restaurante no encontrado' });
        }
        res.status(500).json({ error: 'Error al obtener el restaurante' });
    }
}
};

export default new Restaurantes();