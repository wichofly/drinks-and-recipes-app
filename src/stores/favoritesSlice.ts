import { StateCreator } from 'zustand';
import { Recipe } from '../types';

export type FavoriteSliceType = {
  favorites: Recipe[];
  handleFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe['idDrink']) => boolean;
};

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (
  set,
  get
) => ({
  favorites: [],

  handleFavorite: (recipe) => {
    if (
      // Check if the recipe is already in favorites
      get().favoriteExists(recipe.idDrink)
    ) {
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
    }
  },

  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
});

/**
 * 
 * set((state) => ({
      favorites: [...state.favorites, recipe],
    }));
      
    Another option to code it.
    set({
      favorites: [...get().favorites, recipe],
    });
 */
