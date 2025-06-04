import DrinkCard from '../components/DrinkCard';
import Spinner from '../components/Spinner';
import { useAppStore } from '../stores/useAppStore';

const IndexPage = () => {
  const drinks = useAppStore((state) => state.drinks);
  const isLoading = useAppStore((state) => state.isLoading);

  const hasDrinks = drinks.drinks.length > 0;

  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-4 md:px-4 lg:px-0">
        Recipes
      </h1>

      {isLoading ? (
        <div className="my-10 flex justify-center">
          <Spinner />
        </div>
      ) : hasDrinks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10 px-4 md:px-4 lg:px-0">
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
