import mongoose from "mongoose";

const faqSchema = mongoose.Schema({
  title: { type: Array },
  description: { type: Array },
});

export const FAQ = mongoose.model("FAQ", faqSchema);
