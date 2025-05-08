import { StateCreator } from 'zustand';
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from '../services/RecipeService';
import { Categories, Drink, Drinks, Recipe, SearchFilter } from '../types';

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  isLoading: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink['idDrink']) => Promise<void>;
  closeModal: () => void;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },

  drinks: {
    drinks: [],
  },

  selectedRecipe: {} as Recipe,

  modal: false,

  fetchCategories: async () => {
    const categories = await getCategories();
    console.log(categories);
    set({
      categories,
    });
  },

  isLoading: false,

  searchRecipes: async (filters) => {
    set({ isLoading: true });
    const drinks = await getRecipes(filters);
    console.log(drinks);
    set({
      drinks,
      isLoading: false,
    });
  },

  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    console.log(selectedRecipe);
    set({
      selectedRecipe,
      modal: true,
    });
  },

  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe,
    });
  },
});
