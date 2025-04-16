import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useAppStore } from '../stores/useAppStore';

const Modal = () => {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectedRecipe = useAppStore((state) => state.selectedRecipe);

  // Dynamically extract ingredient + measure pairs
  const getIngredientsWithMeasures = () => {
    const ingredients: { ingredient: string; measure: string }[] = [];

    for (let i = 1; i <= 6; i++) {
      const ingredient =
        selectedRecipe[`strIngredient${i}` as keyof typeof selectedRecipe];
      const measure =
        selectedRecipe[`strMeasure${i}` as keyof typeof selectedRecipe];

      if (ingredient) {
        ingredients.push({
          ingredient,
          measure: measure ?? '',
        });
      }
    }

    return ingredients;
  };

  return (
    <>
      <Dialog open={modal} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border border-stone-400 bg-white p-12 rounded-lg shadow-lg">
            <DialogTitle className="font-bold text-center text-4xl">
              {selectedRecipe.strDrink}
            </DialogTitle>

            <img
              src={selectedRecipe.strDrinkThumb}
              alt={`View from ${selectedRecipe.strDrink}`}
              className="mx-auto w-96"
            />

            <Description className="text-2xl">
              Ingredients & Measures
            </Description>
            <ul>
              {getIngredientsWithMeasures().map(
                ({ ingredient, measure }, index) => (
                  <li key={index}>
                    <span>{ingredient}</span>{' '}
                    {measure && <span>- {measure}</span>}
                  </li>
                )
              )}
            </ul>

            <p className="text-lg">{selectedRecipe.strInstructions}</p>
            <div className="flex gap-4">
              <button onClick={closeModal}>Cancel</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
