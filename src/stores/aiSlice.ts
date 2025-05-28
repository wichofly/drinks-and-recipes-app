import { StateCreator } from 'zustand';

export type AIStateType = {
  recipe: string;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AIStateType> = () => ({
  recipe: '',

  generateRecipe: async (prompt) => {
    console.log(`Generating recipe for prompt: ${prompt}`);
  },
});
