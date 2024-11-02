import restaurantesService from "../service/restaurantes.service.js";
class Restaurantes {
async getRest(req, res) {
    try {
      const resultado = await restaurantesService.getRest();
      if (resultado) {
        res.send(resultado);
      } else {
        res.status(400).json({ message: "Not found" });
      }
    } catch (err) {
      console.log({ err });
    }   
  }
}

export default new Restaurantes();