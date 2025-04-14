import { z } from 'zod';

export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

// To make the consult to the API we require ingredient and category
export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

// Singular drink
export const DrinkAPIResponse = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

export const DrinksAPIResponse = z.object({
  drinks: z.array(DrinkAPIResponse),
});
