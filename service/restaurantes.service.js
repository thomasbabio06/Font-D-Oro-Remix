import { restaurantModel } from "../dao/Models/restaurantes.model.js";
import mongoose from "mongoose";

class Restaurantes {
    async getRest(filter = {}) {
        console.log('Aplicando filtro:', filter);
        
        const result = await restaurantModel.find(filter);
        console.log('Resultado de la consulta:', result);
        return result;
    }
    async getRestById(rId) {
     
            // Verifica si el ID es un ObjectId válido
            if (!mongoose.Types.ObjectId.isValid(rId)) {
                throw new Error('ID inválido');
            }
            const result = await restaurantModel.getRestById(rId);
            if (!result) {
                throw new Error('Restaurante no encontrado');
            }
            return result;
        
    }
}
export default new Restaurantes();