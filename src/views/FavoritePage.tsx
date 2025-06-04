import DrinkCard from '../components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

const FavoritePage = () => {
  const favorites = useAppStore((state) => state.favorites);

  const hasFavorites = favorites.length > 0;

  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-4 md:px-4 lg:px-0">
        Favorites
      </h1>

      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10 px-4 md:px-4 lg:px-0">
          {favorites.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className="text-center my-10 text-2xl">
          🍸🥂 Find your Favorites 🍻🍹
        </p>
      )}
    </>
  );
};

export default FavoritePage;
