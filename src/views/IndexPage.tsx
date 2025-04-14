import { useAppStore } from '../stores/useAppStore';

const IndexPage = () => {
  const drinks = useAppStore((state) => state.drinks);

  const hasDrinks = drinks.drinks.length > 0;

  return (
    <>
      <h1 className="text-6xl font-semibold">Recipes</h1>

      {hasDrinks ? (
        <>
          {drinks.drinks.map((drink) => (
            <p key={drink.idDrink}>{drink.strDrink}</p>
          ))}
        </>
      ) : (
        <p className="text-center my-10 text-2xl">
          No results yet, use the form to search for recipes.
        </p>
      )}
    </>
  );
};

export default IndexPage;
