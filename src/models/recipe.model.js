import mongoose from "mongoose";
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  procedure: {
    type: String,
    required: true,
  },
  item: {
    type: String,
  },
});

export const Recipe = mongoose.model("recipe", recipeSchema);
