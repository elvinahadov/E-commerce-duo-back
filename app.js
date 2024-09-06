import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import productRouter from "./routes/product.route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(cookieParser());
app.use(express.static("./"));

app.use('/api/products', productRouter)

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Database connection established.");
  })
  .catch((err) => {
    console.log(err);
  });
