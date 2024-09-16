import express from "express";
import { getTopSelling } from "../controllers/TopSelling.controller.js";

const router = express.Router();
router.get("/", getTopSelling);
export default router;
