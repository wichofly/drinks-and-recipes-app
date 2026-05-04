const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim();
const GEMINI_MODEL = 'gemini-2.5-flash';

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

async function* generateGeminiText(prompt: string): AsyncGenerator<string> {
  if (!GEMINI_API_KEY) {
    throw new Error('Missing VITE_GEMINI_API_KEY in your .env file');
  }

  if (GEMINI_API_KEY.startsWith('tu_api_key')) {
    throw new Error('Replace VITE_GEMINI_API_KEY with a real Google AI Studio API key');
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
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
    throw new Error(data.error?.message ?? 'Gemini request failed');
  }

  const text = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text ?? '')
    .join('');

  if (!text) {
    throw new Error('Gemini did not return any text');
  }

  yield text;
}

export default {
  async generateRecipe(prompt: string) {
    return generateGeminiText(prompt);
  },
};
