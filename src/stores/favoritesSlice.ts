import { StateCreator } from 'zustand';
import { Recipe } from '../types';

export type FavoriteSliceType = {
  favorites: Recipe[];
  handleFavorite: (recipe: Recipe) => void;
};

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (
  set,
  get
) => ({
  favorites: [],

  handleFavorite: (recipe) => {
    if (
      get().favorites.some((favorite) => favorite.idDrink === recipe.idDrink)
    ) {
      // console.log('Added to Fav');
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));
    } else {
      // console.log('No Exist');

      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));

      // set({
      //   favorites: [...get().favorites, recipe],
      // });
    }
  },
});
