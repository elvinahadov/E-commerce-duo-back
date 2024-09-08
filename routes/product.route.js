import express from "express"

import {getProducts,
    getSingleProduct,
    deleteProduct,
    editProduct,
    addProduct} from "../controllers/product.controller.js"

    const router = express.Router();

    router.post("/",addProduct)
    router.get("/",getProducts)
    router.get("/:id",getSingleProduct)
    router.patch("/:id",editProduct)
    router.delete("/:id",deleteProduct)

    export default router 