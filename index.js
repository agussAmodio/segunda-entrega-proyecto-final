import express from "express";
const { Router } = express;

import {
  productosDao as productosApi,
  carritosDao as carritosApi,
  productosDAO,
  carritosDAO,
} from "./daos/index.js";

const app = express();

// configuro router de productos

const productosRouter = new Router();

productosRouter.get("/", async (req, res) => {
  await productosDAO.getAll();
  res.send();
});

productosRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  await productosDAO.getById(id);
  res.send();
});

productosRouter.post("/", async (req, res) => {
  const body = req.body;
  await productosDAO.save(body);
  res.send();
});

productosRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await productosDAO.update(id, body);
  res.send();
});

productosRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await productosDAO.deleteById(id);
  res.send();
});

// configuro router de carritos

const carritosRouter = new Router();

carritosRouter.get("/", async (req, res) => {
  await carritosDAO.findAll();
  res.send();
});

carritosRouter.post("/", async (req, res) => {
  const body = req.body;
  await carritosDAO.save(body);
  res.send();
});

carritosRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await carritosDAO.deleteById(id);
  res.send();
});

// configuro el servidor

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/productos", productosRouter);
app.use("/api/carritos", carritosRouter);

app.listen(8080, () => {
  console.log("servidor activo!");
});

export default app;
