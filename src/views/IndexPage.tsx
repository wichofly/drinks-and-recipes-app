import DrinkCard from '../components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

const IndexPage = () => {
  const drinks = useAppStore((state) => state.drinks);

  const hasDrinks = drinks.drinks.length > 0;

  return (
    <>
      <h1 className="text-6xl font-semibold">Recipes</h1>

      {hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className="text-center my-10 text-2xl">
          No results yet, use the form to search for recipes.
        </p>
      )}
    </>
  );
};

export default IndexPage;
