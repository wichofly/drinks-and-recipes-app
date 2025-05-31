import { FormEvent } from 'react';
import { useAppStore } from '../stores/useAppStore';
import Spinner from '../components/Spinner';
import ReactMarkdown from 'react-markdown';

export default function GenerateAIPage() {
  const showNotification = useAppStore((state) => state.showNotification);
  const generateRecipe = useAppStore((state) => state.generateRecipe);
  const recipe = useAppStore((state) => state.recipe);
  const isGenerating = useAppStore((state) => state.isGenerating);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const prompt = form.get('prompt') as string;

    if (prompt.trim() === '') {
      showNotification({
        text: 'Please enter ingredients to generate a recipe.',
        error: true,
      });
      return;
    }

    await generateRecipe(prompt);
  };

  return (
    <>
      <h1 className="text-6xl font-semibold">Generate Recipes with AI </h1>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 py-10">
          <div className="relative">
            <input
              name="prompt"
              id="prompt"
              className="w-full border border-slate-800 p-4 pr-16 rounded-lg bg-white focus:outline-none"
              placeholder="Generate a recipe with ingredients. E.g. Drink with Tequila and Strawberry."
            />
            <button
              type="submit"
              aria-label="Generate Recipe"
              className={`cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 transition ${
                isGenerating
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:scale-110'
              }`}
              disabled={isGenerating}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
        {isGenerating && <Spinner />}
        {recipe && (
          <div className="prose prose-lg max-w-3xl mx-auto mt-10 text-gray-800 bg-white p-6 rounded-lg shadow-lg overflow-x-auto space-y-6">
            <ReactMarkdown>{recipe}</ReactMarkdown>
          </div>
        )}
      </div>
    </>
  );
}
