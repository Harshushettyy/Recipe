import express from "express";
import { createRecipe } from "../controllers/recipe/createRecipe.js";
import { deleteRecipe } from "../controllers/recipe/deleteRecipe.js";
import { readAllRecipe } from "../controllers/recipe/readAllRecipe.js";
import { readOneRecipe } from "../controllers/recipe/readOneRecipe.js";
import { updateRecipe } from "../controllers/recipe/updateRecipe.js";

export const recipeRouter = express.Router();

recipeRouter.post("/newrecipe", createRecipe);
recipeRouter.delete("/delrecipe", deleteRecipe);
recipeRouter.get("readAllRecipe", readAllRecipe);
recipeRouter.get("readOneRecipe", readOneRecipe);
recipeRouter.put("updateRecipe", updateRecipe);
