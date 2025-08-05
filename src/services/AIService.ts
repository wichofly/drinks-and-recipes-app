import { streamText } from 'ai';
import { openrouter } from '../lib/ai';

export default {
  async generateRecipe(prompt: string) {
    try {
      const result = streamText({
        model: openrouter('deepseek/deepseek-r1:free'),
        prompt,
        system:
          'You are a nutritionist or dietitian-nutritionist. You help people stay healthy.' +
          'Respond to the user with good recommendations and a list of recipes ',
        temperature: 0.8, // Adjust temperature for creativity maximum 1.0 minimum 0.0
      });

      return result.textStream;
    } catch (err) {
      console.error('OpenRouter error:', err);
      window.alert(
        `AI error: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  },
};
