import contenedorMongoDB from "../../contenedores/contenedorMongoDb.js";

class DAOCarritosMongoDB extends contenedorMongoDB {
  constructor() {
    super("carritos", {
      productos: { type: [] },
    });
  }

  //GET :id/productos - Me permite listar todos los productos guardados en el carrito
  async getPoructosCarrito(id_Carrito) {
    const data = await this.db.findById({ _id: id_Carrito });
    const productos = data.productos;
    return productos;
  }
}
export default DAOCarritosMongoDB;
