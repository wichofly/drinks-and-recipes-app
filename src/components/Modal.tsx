import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useAppStore } from '../stores/useAppStore';
import { JSX } from 'react';

const Modal = () => {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectedRecipe = useAppStore((state) => state.selectedRecipe);

  // Dynamically extract ingredient + measure pairs
  const getIngredientsWithMeasures = () => {
    const ingredients: JSX.Element[] = [];

    for (let i = 1; i <= 6; i++) {
      const ingredient =
        selectedRecipe[`strIngredient${i}` as keyof typeof selectedRecipe];
      const measure =
        selectedRecipe[`strMeasure${i}` as keyof typeof selectedRecipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-lg font-normal">
            {ingredient} - {measure}
          </li>
        );
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
            <ul className="list-disc list-inside space-y-1">
              {getIngredientsWithMeasures()}
            </ul>

            <p className="">{selectedRecipe.strInstructions}</p>
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
