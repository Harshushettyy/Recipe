import { response } from "express";
import { Recipe } from "../../models/recipe.model.js";

export const updateRecipe = async (request, response) => {
  try {
    const recipeID = request.params.id;
    await Recipe.findByIdAndUpdate(recipeID);
    response.status(200).json({ message: "Updated Successfully" });
  } catch (e) {
    console.log(e);
    response.status(500).json({ message: e });
  }
};
