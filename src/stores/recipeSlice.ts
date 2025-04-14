import { StateCreator } from 'zustand';
import { getCategories } from '../services/RecipeService';
import { Categories, SearchFilter } from '../types';

export type RecipeSliceType = {
  categories: Categories;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
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
    console.log(filters);
  },
});
