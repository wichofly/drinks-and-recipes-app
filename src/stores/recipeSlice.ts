import { StateCreator } from 'zustand';
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from '../services/RecipeService';
import { Categories, Drink, Drinks, SearchFilter } from '../types';

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink['idDrink']) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },

  drinks: {
    drinks: [],
  },

  fetchCategories: async () => {
    const categories = await getCategories();
    console.log(categories);
    set({
      categories,
    });
  },

  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters);
    console.log(drinks);
    set({
      drinks,
    });
  },

  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    console.log(selectedRecipe);
  },
});
