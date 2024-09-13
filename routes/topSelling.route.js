import express from "express";
import { getTopSelling } from "../controllers/TopSelling.controller";

const router = express.Router();
router.get("api/produts/getTopSelling", getTopSelling);
export default router;
