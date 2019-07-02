import mongoose from "mongoose";

const ConmmentSchema = new mongoose.Schema({
  text:{
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const model = mongoose.model("Comment", ConmmentSchema);

export default model;