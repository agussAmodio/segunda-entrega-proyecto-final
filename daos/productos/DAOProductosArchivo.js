import contenedorArchivo from "../../contenedores/contenedorArchivo.js";

class DAOProductosArchivo extends contenedorArchivo {
  constructor() {
    super("productos.json");
  }
}
export default DAOProductosArchivo;
