import { promises as fs } from "fs";
import config from "../config.js";

class contenedorArchivo {
  constructor(ruta) {
    this.ruta = `${config.fileSystem.path}/${ruta}`;
  }

  async obtenerProductosDesdeDb() {
    const data = await fs.promises.readFile(
      `${this.ruta}/productos.json`,
      "utf-8"
    );
    let productos = JSON.parse(data);
    return productos;
  }

  async guardarProductosEnDb(productos) {
    const productosString = JSON.stringify(productos);
    await fs.promises.writeFile(`${this.ruta}/productos.json`, productosString);
  }

  //listar por id (findId)
  async findId(id) {
    const productos = await this.obtenerProductosDesdeDb();
    const productoEncontrado = productos.findIndex(
      (producto) => producto.id == idBuscar
    );

    if (productoEncontrado !== -1) {
      return productos[productoEncontrado];
    } else {
      return "producto no encontrado";
    }
  }

  //listar todo (findAll)

  async findAll() {
    let productos = await this.obtenerProductosDesdeDb();
    return productos;
  }

  //guardar (save)

  async save(productoParaGuardar) {
    let productos;

    try {
      productos = await this.obtenerProductosDesdeDb();
    } catch (error) {
      productos = [];
    }

    let id;

    if (productos.length === 0) {
      id = 1;
      productoParaGuardar.id = id;
      let fecha = new Date();
      let fechaYhora = fecha.toLocaleString();
      productoParaGuardar.timestamp = fechaYhora;
    } else {
      let ultimoProducto = productos[productos.length - 1];
      let idActual = ultimoProducto.id;
      id = idActual + 1;
      productoParaGuardar.id = id;
      let fecha = new Date();
      let fechaYhora = fecha.toLocaleString();
      productoParaGuardar.timestamp = fechaYhora;
    }

    productos.push(productoParaGuardar);

    this.guardarProductosEnDb(productos);
  }

  //Actualizar (update)

  async putById(idActualizar, productoActualizado) {
    const productos = await this.obtenerProductosDesdeDb();
    let indiceDeProductoActualizar = productos.findIndex(
      (producto) => producto.id == idActualizar
    );
    console.log(indiceDeProductoActualizar);
    if (indiceDeProductoActualizar !== -1) {
      productos[indiceDeProductoActualizar] = productoActualizado;
      await this.guardarProductosEnDb(productos);
    } else {
      console.log("producto no encontrado");
    }
  }

  //borrar por id (deleteById)

  async deleteById(idBorrar) {
    const productos = await this.obtenerProductosDesdeDb();
    const indiceDeProductoABorrar = productos.findIndex(
      (producto) => producto.id == idBorrar
    );

    if (indiceDeProductoABorrar !== -1) {
      productos.splice(indiceDeProductoABorrar, 1);
      this.guardarProductosEnDb(productos);
    } else {
      console.log("Id no encontrado");
    }
  }
}

export default contenedorArchivo;
