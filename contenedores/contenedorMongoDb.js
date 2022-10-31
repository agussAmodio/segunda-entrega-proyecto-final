import mongoose from "mongoose";
import config from "../config.js";

await mongoose.connect(config.mongoDB.uri, config.mongoDB.options);
class contenedorMongoDB {
  constructor(coleccion, esquema) {
    this.db = mongoose.model(coleccion, esquema);
  }

  //CREATE / POST (Guardar productos/carritos en mongo)
  async save(newDoc) {
    try {
      const doc = await this.db.create(newDoc);
      return doc._id;
    } catch (e) {}
  }

  //FIND / GET (lista los elementos incluidos en la base de datos)
  async findAll() {
    try {
      const data = await this.db.find({});
      return data;
    } catch (e) {}
  }

  //FIND / GET (lista los elementos incluidos en la base de datos por id)
  async findId(id) {
    try {
      const data = await this.db.find({ _id: id });
      return data;
    } catch (e) {}
  }

  //DELETE / DELETE (borra un elemento de la base de datos segun su id)
  async deleteById(id) {
    try {
      await this.db.deleteOne({ _id: id });
    } catch (e) {}
  }

  //DELETE / DELETE (borra todos los elementos de la coleccion)
  async deleteAll() {
    try {
      await this.db.deleteMany({});
    } catch (e) {}
  }

  //UPDATE / PUT (actualiza los elementos incluidos en la base de datos)

  async update(elem) {
    try {
      await this.db.replaceOne({ _id: elem.id }, elem);
      return elem;
    } catch (e) {}
  }
}

export default contenedorMongoDB;
