import { restaurantModel } from "../dao/Models/restaurantes.model.js";

class Restaurantes {
    async getRest(filter = {}) {
        console.log('Aplicando filtro:', filter);
        
        const result = await restaurantModel.find(filter);
        console.log('Resultado de la consulta:', result);
        return result;
    }
}
export default new Restaurantes();