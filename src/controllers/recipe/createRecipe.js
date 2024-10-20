import { Recipe } from "../../models/recipe.model.js";

export const createRecipe = async (request, response) => {
  try {
    const { name, category, procedure, item } = request.body;

    if (!name || !category || !procedure || !item) {
      return response.status(400).json({ message: "Valid fields missing" });
    }

    const recipeCreated = await Recipe.create({
      name,
      category,
      procedure,
      item,
    });

    response.status(201).json({ message: recipeCreated });
  } catch (e) {
    console.log(e);
    response.status(500).json({ message: e });
  }
};
