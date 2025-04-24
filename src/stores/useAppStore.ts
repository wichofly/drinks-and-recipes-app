import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createRecipeSlice, RecipeSliceType } from './recipeSlice';
import { createFavoriteSlice, FavoriteSliceType } from './favoritesSlice';
import {
  createNotificationSlice,
  NotificationSliceType,
} from './notificationSlice';

// This is the main store for the app. It combines all the slices of the store. (https://zustand.docs.pmnd.rs/guides/slices-pattern)
export const useAppStore = create<
  RecipeSliceType & FavoriteSliceType & NotificationSliceType
>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a), // Non-persistent slice
    ...persist(createFavoriteSlice, { name: 'favorite-store' })(...a), // Persistent slice
    ...createNotificationSlice(...a),
  }))
);
