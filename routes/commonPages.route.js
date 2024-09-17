import express from "express";
import { getCommon,addCommon,deleteCommon,getSingleCommon,editCommon } from "../controllers/commonPages.controller.js";

const router = express.Router();
router.get("/", getCommon);
router.post("/", addCommon);
router.delete("/:id", deleteCommon);
router.get("/:id", getSingleCommon);
router.patch("/:id", editCommon);

export default router;