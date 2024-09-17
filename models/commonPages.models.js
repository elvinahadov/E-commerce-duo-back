import mongoose from "mongoose";

const commonPageSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
  code: {
    type: String,
  },
});

export const Common = mongoose.model("Common", commonPageSchema);
