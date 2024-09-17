import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import productRouter from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import newArrivalsRoute from "./routes/newArrivals.route.js";
import topSellingRoute from "./routes/topSelling.route.js";
import categoryRoute from "./routes/category.route.js";
import faqRoute from "./routes/faq.route.js";
import commonRoute from "./routes/commonPages.route.js";

import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(cookieParser());
app.use(express.static("./"));

app.use("/api/products", productRouter);
app.use("/api/newArrivals", newArrivalsRoute);
app.use("/api/topSelling", topSellingRoute);
app.use("/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/faq",faqRoute)
app.use("/api/common",commonRoute)


app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});

mongoose.connect(MONGODB_URL)
  .then(() => console.log("Database connection established."))
  .catch((err) => console.log(err));
