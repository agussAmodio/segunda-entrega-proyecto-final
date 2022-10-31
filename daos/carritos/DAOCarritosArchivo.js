import contenedorArchivo from "../../contenedores/contenedorArchivo.js";

class DAOCarritosArchivo extends contenedorArchivo {
  constructor() {
    super("carritos.json");
  }

  //agrega una un producto por id a un carrito
  async addProducto(id_carrito, id_producto) {
    const IndexCarrito = await this.buscarIndexCarrito(id_carrito);
    const buscarProducto = await DB.getById(id_producto);
    const carritos = await this.obtenerCarritosDesdeDb();
    carritos[IndexCarrito].productos.push(buscarProducto);
    this.guardarCarritosEnDb(carritos);
  }

  async buscarIndexCarrito(idCarrito) {
    const carritos = await this.obtenerCarritosDesdeDb();
    const indexABuscar = carritos.findIndex(
      (carrito) => carrito.id == idCarrito
    );
    if (indexABuscar !== -1) {
      return indexABuscar;
    } else {
      return "Carrito non encontrado";
    }
  }

  //Busca un producto por id del carrito y lo elimina
  async deleteProductoById(id_carrito, id_producto) {
    const IndexCarrito = await this.buscarIndexCarrito(id_carrito);
    const indexProducto = await DB.indexProductoABorrar(id_producto);
    const carritos = await this.obtenerCarritosDesdeDb();

    const indexCarritoABuscar = carritos.findIndex(
      (carrito) => carrito.id == id_carrito
    );
    const carritoActual = carritos[indexCarritoABuscar];
    const indexProductoABorrar = carritoActual.productos.findIndex(
      (producto) => producto.id == id_producto
    );

    if (indexProductoABorrar !== -1) {
      carritos[indexCarritoABuscar].productos.splice(indexProductoABorrar, 1);
      this.guardarCarritosEnDb(carritos);
    } else {
      console.log("Id no encontrado");

      console.log(indexCarritoABuscar);
      console.log(carritos[indexCarritoABuscar]);
      console.log(indexProductoABorrar);
    }
  }
}
export default DAOCarritosArchivo;
