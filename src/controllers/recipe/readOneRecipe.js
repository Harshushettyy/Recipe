import { response } from "express";
import { Recipe } from "../../models/recipe.model.js";

export const readOneRecipe = async (request, response) => {
  try {
    const recipeID = request.params.id;
    await Recipe.findById(recipeID);
    response.status(200).json({ message: "found Successfully" });
  } catch (e) {
    console.log(e);
    response.status(500).json({ message: e });
  }
};
