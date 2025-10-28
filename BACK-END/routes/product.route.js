import express from "express"
import mongoose, { get } from "mongoose";
import Product from "../models/product.model.js";
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controllers/product.controllers.js";
const router = express.Router();

// we copied all this routes from server.js and change app to router
 // we moved all the products to the controller  file 
 
  router.get("/", getProducts);
  router.post("/", createProducts);
  router.put("/:id", updateProducts)
  router.delete("/:id", deleteProducts)


export default router;
