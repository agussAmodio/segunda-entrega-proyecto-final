import contenedorMongoDB from "../../contenedores/contenedorMongoDb.js";

class DAOProductosMongoDB extends contenedorMongoDB {
  constructor() {
    super("productos", {
      nombre: String,
      descripcion: String,
      codigo: Number,
      foto: String,
      precio: Number,
      stock: Number,
    });
  }
}
export default DAOProductosMongoDB;
