import { StateCreator } from "zustand";

export type AIStateType = {
  recipe: string;
};

export const createAISlice: StateCreator<AIStateType> = () => ({
  recipe: '',
});
