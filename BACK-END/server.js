import express from "express";
import dotenv from "dotenv";
import path from "path";

// created all the routes for easier understanding and exported it the new product.route.js
// we moved them 
// import Product from "./models/product.model.js";
// import mongoose from "mongoose";


import { connectDB} from "./config/db.js"
import productRoutes from "./routes/product.route.js"
const __dirname = path.resolve();


const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

    app.use(express.json()); // allows us to accept JSON data in the req.body




app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production"){
   app.use(express.static(path.join(__dirname, "/frontend/dist"))) ;

   app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
   })
}
// Start server 
app.listen(PORT, () => {          
    connectDB();
    console.log("Server is now running at http://localhost:" + PORT  );
});
