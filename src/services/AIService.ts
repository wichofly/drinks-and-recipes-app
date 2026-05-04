const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim();
const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite'];

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
  error?: {
    message?: string;
  };
};

async function requestGeminiText(prompt: string, model: string) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [
            {
              text:
                'You are a nutritionist or dietitian-nutritionist. You help people stay healthy. ' +
                'Respond to the user with good recommendations and a list of recipes.',
            },
          ],
        },
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.8,
        },
      }),
    }
  );

  const data = (await response.json()) as GeminiResponse;

  if (!response.ok) {
    throw new Error(data.error?.message ?? `Gemini request failed with status ${response.status}`);
  }

  const text = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text ?? '')
    .join('');

  if (!text) {
    throw new Error('Gemini did not return any text');
  }

  return text;
}

async function* generateGeminiText(prompt: string): AsyncGenerator<string> {
  if (!GEMINI_API_KEY) {
    throw new Error(
      'Missing VITE_GEMINI_API_KEY. Add it to .env locally and to your hosting environment variables in production.'
    );
  }

  if (GEMINI_API_KEY.startsWith('tu_api_key')) {
    throw new Error('Replace VITE_GEMINI_API_KEY with a real Google AI Studio API key');
  }

  let lastError: Error | null = null;

  for (const model of GEMINI_MODELS) {
    try {
      yield await requestGeminiText(prompt, model);
      return;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Gemini request failed');
    }
  }

  throw lastError ?? new Error('Gemini request failed');
}

export default {
  async generateRecipe(prompt: string) {
    return generateGeminiText(prompt);
  },
};
