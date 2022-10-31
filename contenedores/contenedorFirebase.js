import admin from "firebase-admin";
import config from "../config.js";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
  databaseURL: "https://proyectocoder-d6028.firebaseio.com",
});

console.log("conectado!");

const db = admin.firestore();

class contenedorFirebase {
  constructor() {
    this.db = db;
    this.collection = db.collection("productos");
  }

  async save(producto) {
    try {
      const result = await this.collection.add(producto);
      return result;
    } catch (e) {
      return e;
    }
  }

  async findAll() {
    try {
      const result = await this.collection.get();
      const docs = result.docs;
      const output = docs.map((doc) => ({ id: doc.id, ...doc.data }));
      return output;
    } catch (e) {
      console.log(e);
    }
  }

  async findById(id) {
    try {
      const result = await this.collection.doc(id).get;
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async update(id, data) {
    try {
      const result = await this.collection.doc(id).update(data);
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteById(id) {
    try {
      const result = await this.collection.doc(id).delete();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}
export default contenedorFirebase;
