import { response } from "express";
import { Recipe } from "../../models/recipe.model.js";

export const deleteRecipe = async (request, response) => {
  try {
    const recipeID = request.params.id;
    await Recipe.findByIdAndDelete(recipeID);
    response.status(200).json({ message: "Deleted Successfully" });
  } catch (e) {
    console.log(e);
    response.status(500).json({ message: e });
  }
};
