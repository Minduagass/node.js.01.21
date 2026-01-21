import express from "express";
import {
  getAllRecipes,
  getRecipeById,
  insertRecipe,
  updateRecipeById,
  deleteRecipeById,
  getRandomRecipe,
} from "../controller/recipe.js";

const router = express.Router();

router.get("/recipes", getAllRecipes);

router.get("/recipes/random", getRandomRecipe);

router.get("/recipes/:id", getRecipeById);

router.post("/recipes", insertRecipe);

router.put("/recipes/:id", updateRecipeById);

router.delete("/recipes/:id", deleteRecipeById);

export default router;
