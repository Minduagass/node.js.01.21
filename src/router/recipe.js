import express from "express";
import {
  getAllRecipes,
  getRecipeById,
  insertRecipe,
  updateRecipeById,
  deleteRecipeById,
  getRandomRecipe,
} from "../controller/recipe.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/recipes", auth, getAllRecipes);

router.get("/recipes/random", auth, getRandomRecipe);

router.get("/recipes/:id", auth, getRecipeById);

router.post("/recipes", auth, insertRecipe);

router.put("/recipes/:id", auth, updateRecipeById);

router.delete("/recipes/:id", auth, deleteRecipeById);

export default router;
