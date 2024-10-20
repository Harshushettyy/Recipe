import { response } from "express";
import { Recipe } from "../../models/recipe.model.js";

export const readAllRecipe = async (request, response) => {
  try {
    const recipe = await Recipe.find();
    response.status(200).json({ message: "Found All" });
  } catch (e) {
    console.log(e);
    response.status(500).json({ message: e });
  }
};
