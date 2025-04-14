import { useAppStore } from '../stores/useAppStore';
import { Drink } from '../types';

type DrinkCardProps = {
  drink: Drink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
  const selectRecipe = useAppStore((state) => state.selectRecipe);

  return (
    <div className="border border-amber-50 shadow-lg">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`Image of ${drink.strDrink}`}
          className="hover:scale-110 transition-transform duration-1000 hover:rotate-2"
        />
      </div>

      <div className="p-5">
        <h2 className="text-2xl truncate font-medium">{drink.strDrink}</h2>
        <button
          className="bg-orange-400 hover:bg-orange-500 transition-colors duration-500 ease-in-out mt-5 w-full p-3 font-semibold text-white text-lg rounded-md"
          onClick={() => selectRecipe(drink.idDrink)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;
