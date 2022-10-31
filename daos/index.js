import * as dotenv from "dotenv";
import DAOProductosArchivo from "./productos/DAOProductosArchivo.js";
dotenv.config();

const daos = {
  mongo: async () => {
    const { default: DAOProductosMongoDB } = await import(
      "./productos/DAOProductosMongoDB.js"
    );
    const { default: DAOCarritosMongoDB } = await import(
      "./carritos/DAOCarritosMongoDB.js"
    );
    return {
      productosDAO: new DAOProductosMongoDB(),
      carritosDAO: new DAOCarritosMongoDB(),
    };
  },
  archivo: async () => {
    const { default: DAOProductosArchivo } = await import(
      "./productos/DAOProductosArchivo.js"
    );
    const { default: DAOCarritosArchivo } = await import(
      "./carritos/DAOCarritosArchivo.js"
    );
    return {
      productosDAO: new DAOProductosArchivo(),
      carritosDAO: new DAOCarritosArchivo(),
    };
  },
  memoria: async () => {
    const { default: DAOProductosMemoria } = await import(
      "./productos/DAOProductosMemoria.js"
    );
    const { default: DAOCarritosMemoria } = await import(
      "./carritos/DAOCarritosMemoria.js"
    );
    return {
      productosDAO: new DAOProductosMemoria(),
      carritosDAO: new DAOCarritosMemoria(),
    };
  },
  firebase: async () => {
    const { default: DAOProductosFirebase } = await import(
      "./productos/DAOProductosFirebase.js"
    );
    const { default: DAOCarritosFirebase } = await import(
      "./carritos/DAOCarritosFirebase.js"
    );
    return {
      productosDAO: new DAOProductosFirebase(),
      carritosDAO: new DAOCarritosFirebase(),
    };
  },
};

export { productosDAO, carritosDAO };
//export default daos[process.env.TIPO];
