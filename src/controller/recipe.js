import RecipeModel from "../models/recipe.js";
import { v4 as uuid } from "uuid";

export const getAllRecipes = async (req, res) => {
  const recipes = await RecipeModel.find({ userId: req.body.userId });

  return res.json({ recipes: recipes });
};

export const getRecipeById = async (req, res) => {
  const id = req.params.id;
  const recipe = await RecipeModel.findOne({ id: id, userId: req.body.userId });

  if (!recipe) {
    return res.status(404).json({ message: `No recipe with id: ${id}` });
  }

  return res.json({ recipe: recipe });
};

export const insertRecipe = async (req, res) => {
  const recipe = new RecipeModel({
    id: uuid(),
    ...req.body,
    userId: req.body.userId,
  });
  await recipe.save();

  return res.status(201).json({ recipe: recipe });
};

export const updateRecipeById = async (req, res) => {
  const id = req.params.id;

  const recipe = await RecipeModel.findOneAndUpdate(
    { id: id, userId: req.body.userId },
    { ...req.body },
    { new: true },
  );

  if (!recipe) {
    return res.status(404).json({ message: `No recipe with id: ${id}` });
  }

  return res.status(200).json({ recipe: recipe });
};

export const deleteRecipeById = async (req, res) => {
  const id = req.params.id;
  const recipe = await RecipeModel.findOneAndDelete({
    id: id,
    userId: req.body.userId,
  });

  if (!recipe) {
    return res.status(404).json({ message: `No recipe with id: ${id}` });
  }

  return res.status(200).json({ recipe: recipe });
};

export const getRandomRecipe = async (req, res) => {
  const recipes = await RecipeModel.aggregate([{ $sample: { size: 1 } }]);

  if (recipes.length === 0) {
    return res.status(404).json({ message: "No recipes found" });
  }

  return res.status(200).json({ recipe: recipes[0] });
};
