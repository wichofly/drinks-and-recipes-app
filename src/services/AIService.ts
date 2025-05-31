import { streamText } from 'ai';
import { openrouter } from '../lib/ai';

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter('meta-llama/llama-4-scout:free'),
      prompt,
      system:
        'You are a nutritionist or dietitian-nutritionist. You help people stay healthy.' +
        'Respond to the user with good recommendations and a list of recipes ',
      temperature: 0.8, // Adjust temperature for creativity maximum 1.0 minimum 0.0
    });

    return result.textStream;
  },
};

