import {Product} from "../models/product.models.js";

export const getNewArrivals = async (req, res) => {
    try {
      const products = await Product.find({newArrivals:true});
      res.status(200).json({message : "Product found",data:products});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};