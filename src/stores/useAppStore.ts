import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipeSlice, RecipeSliceType } from './recipeSlice';

// This is the main store for the app. It combines all the slices of the store. (https://zustand.docs.pmnd.rs/guides/slices-pattern)
export const useAppStore = create<RecipeSliceType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
  }))
);
