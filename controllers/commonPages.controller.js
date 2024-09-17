import { Common } from "../models/commonPages.models.js";

export const getCommon = async (req, res) => {
    try {
      const common = await Common.find();
      res.status(200).json({ message: "Common Pages not found", data: common });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const addCommon = async (req, res) => {
    const { title, description, content,code } = req.body;
    if (!title || !description ||!content||!code) {
      res.status(500).send({ message: "Please fill al required fields" });
      return;
    }
    try {
      const newCommon = new Common(req.body);
      await newCommon.save();
      res.status(201).json(newCommon);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  export const deleteCommon = async (req, res) => {
    try {
      const { id } = req.params;
      const common = await Common.findByIdAndDelete(id);
  
      if (!common) return res.status(404).json({ message: "Common not found" });
  
      res.status(200).json({ message: "Common deleted successfully", common });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const getSingleCommon = async (req, res) => {
    try {
      const { id } = req.params;
      const common = await Common.findById(id);
  
      if (!common) return res.status(404).json({ message: "Common Page not found" });
  
      res.status(200).json({ message: "Common Page not found", data: common });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const editCommon = async (req, res) => {
      try {
        const { id } = req.params;
        const updatedCommon = await Common.findByIdAndUpdate(id, req.body, {
          new: true,
        });
    
        if (!updatedCommon)
          return res.status(404).json({ message: "Common Page not found" });
    
        res.status(200).json(updatedCommon);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };