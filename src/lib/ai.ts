import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
})


/**
 * Using ai-sdk from OpenRouter to create an AI client. https://openrouter.ai/docs/community/frameworks#vercel-ai-sdk
 */