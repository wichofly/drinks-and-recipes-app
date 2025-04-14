import { Drink } from '../types';

type DrinkCardProps = {
  drink: Drink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
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
        <button className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-semibold text-white text-lg rounded-md">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;
