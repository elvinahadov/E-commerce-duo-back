import express from "express";
import { getNewArrivals } from "../controllers/newArrivals.controller";

const router = express.Router();
router.get("/api/products/getNewArrivals", getNewArrivals);
export default router;