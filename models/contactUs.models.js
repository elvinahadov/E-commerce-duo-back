import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  mail: {
    type: String,
  },
  number: {
    type: String,
  },
  address: {
    type: String,
  },
});

export const ContactUs = mongoose.model("ContactUs", contactSchema);
