import { StateCreator } from 'zustand';
import AIService from '../services/AIService';

export type AIStateType = {
  recipe: string;
  isGenerating: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AIStateType> = (set) => ({
  recipe: '',

  isGenerating: false,

  generateRecipe: async (prompt) => {
    set({ recipe: '', isGenerating: true }); // Reset recipe before generating a new one and show it is generating new recipe

    const data = await AIService.generateRecipe(prompt);

    for await (const textPart of data) {
      set((state) => ({
        recipe: state.recipe + textPart,
      }));
    }

    set({ isGenerating: false }); // Set generating state to false after generation is complete
  },
});
