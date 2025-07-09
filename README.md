# Drinks and Recipes App - Explore & Generate Cocktails with AI

A sleek and responsive web application that lets you explore drink recipes by category and ingredients, view detailed instructions, and save your favorites — powered by the [CocktailDB API](https://www.thecocktaildb.com/api.php) & Generate Cocktails with AI.

Now with AI: Generate personalized drink recipes based on your own ingredients using natural language prompts!

## ✨ Summary

This project showcases a modern React + TypeScript application with:

- **Dynamic recipe search** from TheCocktailDB
- **Lazy-loaded routes** for optimized performance
- **Animated modal view** for drink details
- **Favorites management** with local storage persistence
- **Clean notifications system**
- **Custom animated loaders** from [cssloaders.github.io](https://cssloaders.github.io)
- **AI-powered recipe generation** using OpenRouter + Vercel AI SDK

## APIs Used (from [TheCocktailDB](https://www.thecocktaildb.com/api.php))

| Endpoint                                  | Purpose                                  |
| ----------------------------------------- | ---------------------------------------- |
| `/list.php?c=list`                        | Fetch list of categories                 |
| `/filter.php?c={category}&i={ingredient}` | Filter drinks by category and ingredient |
| `/lookup.php?i={idDrink}`                 | Get full drink recipe by ID              |
| `Vercel AI SDK`                           | Integrate OpenRouter easier using React  |

### AI SDK Integration

| Tool           | Purpose                                       |
| -------------- | --------------------------------------------- |
| Vercel AI SDK  | AI stream generation via OpenRouter           |
| OpenRouter API | Access to multiple LLMs with easy integration |

## Features

- Search drinks by ingredient and category
- View drink details with instructions and ingredients
- Add/remove favorites — stored with `zustand/persist`
- Visual feedback with toast notifications
- Real-time AI recipe generator using your own ingredients
- Fully typed with Zod for API safety
- AI Recipe Generator using OpenRouter + Vercel AI SDK
- Markdown Output using react-markdown

## Technologies Used

- **React 19 + Vite**
- **TypeScript**
- **Zustand** — state management
- **Zod** — runtime schema validation
- **TailwindCSS v4** — styling
- **[Headless UI](https://headlessui.com/react/transition#transitioning-on-initial-mount)** — accessible modal
- **[Heroicons](https://heroicons.com/)** — icons
- **Axios** — API requests
- **[OpenRouter](https://openrouter.ai/docs/community/vercel-ai-sdk)** - API Gateway for modern LLMs | Using OpenRouter with Vercel AI SDK
- **[ai](https://ai-sdk.dev/docs/ai-sdk-core/settings)** - AI SDK is the TypeScript toolkit designed to help developers build AI-powered applications and agents with React and more

## Key Technologies Explained

- **[Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)**
  Manages global state with slices (recipes, favorites, UI). It can divide main store into smaller individual stores to achieve modularity, using [Slices Pattern](https://zustand.docs.pmnd.rs/guides/slices-pattern). Also includes persistent state for favorites using `zustand/persist`, favorites list is stored in localStorage under the key favorite-store. This is simple to accomplish in Zustand!.

- **[Zod](https://zod.dev/)**
  Validates and parses API responses. Keeps types in sync with actual data from TheCocktailDB.

- **CSS Loaders**
  A custom rotating ball loader from [cssloaders.github.io](https://cssloaders.github.io/) shows during async operations.

- **Suspense Hook**
  Wraps lazy-loaded routes to show a loading indicator while waiting for the page to load nad recipes searched.

- **Lazy Hook**
  Reduces initial bundle size by dynamically loading the `IndexPage`, `FavoritePage` and `GenerateAIPage` only when needed.

- **[Modal](https://headlessui.com/react/transition#examples)**
  Displays detailed recipe information in a clean, accessible, animated dialog.

- **[Notification](https://headlessui.com/react/transition#examples)**
  Provides user feedback using toast notifications with icons and transition effects.

- **[Streaming Recipes](https://ai-sdk.dev/docs/ai-sdk-core/settings) (Vercel ai-sdk)**

  - Streams text results chunk by chunk from OpenRouter LLMs using `streamText()`
  - Enhances UX with real-time updates during recipe generation
  - Prompted with natural language input

- **[ReactMarkdown](https://www.npmjs.com/package/react-markdown)**
  AI-generated responses (recipes) are streamed and rendered beautifully using `ReactMarkdown` with Tailwind’s `prose` utility classes.

## Deployment

The project is live on **Vercel**:
👉 [Drink and Recipes App](https://drink-recipes-five.vercel.app/)
