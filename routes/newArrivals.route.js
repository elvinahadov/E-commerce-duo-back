import express from "express";
import { getNewArrivals } from "../controllers/newArrivals.controller.js";

const router = express.Router();
router.get("/", getNewArrivals);

export default router;