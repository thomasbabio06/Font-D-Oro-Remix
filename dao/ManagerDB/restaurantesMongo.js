// dao/ManagerDB/restaurantesMongo.js
import { restaurantModel } from "../Models/restaurantes.model.js"; // Asegúrate de que la ruta sea correcta

export class Producto {
    constructor(nombre, ciudad, direccion, disponible, image) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.image = image;
        this.disponible = disponible;
    }
}

export class RestauranteMongoManager {
    async getRest(disponible) {
        console.log('Consultando restaurantes desde el manager...');
        const restaurantes = await restaurantModel.find(disponible); // Cambia esta línea
        console.log('Restaurantes encontrados en el manager:', restaurantes);
        return restaurantes; 
    }
}
