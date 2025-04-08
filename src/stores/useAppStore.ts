import { create } from 'zustand';
import { createRecipeSlice, RecipeSliceType } from './recipeSlice';

// This is the main store for the app. It combines all the slices of the store.
export const useAppStore = create<RecipeSliceType>((...a) => ({
  ...createRecipeSlice(...a),
}));
