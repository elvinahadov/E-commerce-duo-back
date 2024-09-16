import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  categoryPic: {
    type: String,
  },
});

export const Category = mongoose.model("Category", categorySchema);
