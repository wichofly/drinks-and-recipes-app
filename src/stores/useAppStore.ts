import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipeSlice, RecipeSliceType } from './recipeSlice';

// This is the main store for the app. It combines all the slices of the store.
export const useAppStore = create<RecipeSliceType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
  }))
);
