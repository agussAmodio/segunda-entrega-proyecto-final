class ContenedorMemoria {
  constructor() {
    this.productos = [];
  }

  findId(id) {
    const indiceDeProductoABuscar = this.productos.findIndex((x) => x.id == id);

    if (indiceDeProductoABuscar !== -1) {
      console.log(indiceDeProductoABuscar);
    } else {
      console.log("producto no encontrado");
    }
  }

  listarAll() {
    console.log(this.productos);
  }

  save(producto) {
    for (let i = 0; i < productos.length; i++) {
      if (i === 0) {
        const id = 1;
        producto[i].id = id;
      } else {
        let ultimoProducto = productos[i - 1];
        let idActual = ultimoProducto.id;
        id = idActual + 1;
        producto[i].id = id;
      }
    }
    this.productos.push(producto);
    console.log(`El producto fue agregado exitosamente`);
  }

  update(producto, idProducto) {
    const indiceDeProductoActualizar = this.productos.findIndex(
      (x) => x.id == idProducto
    );

    if (indiceDeProductoActualizar !== -1) {
      this.productos[indiceDeProductoActualizar] = producto;
      console.log("producto actualizado correctamente");
    } else {
      console.log("producto no encontrado");
    }
  }

  deleteById(id) {
    const indiceDeProductoABorrar = this.productos.findIndex((x) => x.id == id);

    if (indiceDeProductoABorrar !== -1) {
      productos.splice(indiceDeProductoABorrar, 1);
      console.log("producto borrado correctamente");
    } else {
      console.log("producto no encontrado");
    }
  }
}

export default ContenedorMemoria;
