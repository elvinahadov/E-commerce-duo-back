import express from "express";
import { getFaq,addFaq,deleteFaq,getSingleFaq,editFaq } from "../controllers/faq.controller.js";

const router = express.Router();
router.get("/", getFaq);
router.post("/", addFaq);
router.delete("/:id", deleteFaq);
router.get("/:id", getSingleFaq);
router.patch("/:id", editFaq);

export default router;