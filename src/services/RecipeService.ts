import axios from 'axios';
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from '../schemas/recipes-schema';
import { Drink, SearchFilter } from '../types';

export const getCategories = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  const { data } = await axios(url);

  const result = CategoriesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
};

export const getRecipes = async (filters: SearchFilter) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;

  const { data } = await axios(url);

  const result = DrinksAPIResponse.safeParse(data);

  if (result.success) {
    return result.data;
  }
};

export const getRecipeById = async (id: Drink['idDrink']) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const { data } = await axios(url);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  console.log(result);
  
  if (result.success) {
    return result.data;
  }
};
