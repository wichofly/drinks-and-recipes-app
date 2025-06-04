import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

const Header = () => {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: '',
  });

  const { pathname } = useLocation();

  // Check if the current path is the home page
  const isHome = useMemo(() => pathname === '/', [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);

  const categories = useAppStore((state) => state.categories);
  console.log(categories);

  const searchRecipes = useAppStore((state) => state.searchRecipes);

  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all inputs are filled
    if (Object.values(searchFilters).includes('')) {
      showNotification({ text: 'All inputs are required', error: true });
      return;
    }

    // Consult Recipes API
    searchRecipes(searchFilters);
  };

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setSearchFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <header className={isHome ? 'bg-header' : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex justify-center w-full md:w-auto">
            <Link to="/">
              <img className="w-24 md:w-32 mx-auto" src="/logo.svg" alt="logoType" />
            </Link>
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? 'text-orange-500' : 'text-white') +
                ' uppercase font-semibold text-sm md:text-base'
              }
            >
              Start
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                (isActive ? 'text-orange-500' : 'text-white') +
                ' uppercase font-semibold text-sm md:text-base'
              }
            >
              Favorites
            </NavLink>

            <NavLink
              to="/AI"
              className={({ isActive }) =>
                (isActive ? 'text-orange-500' : 'text-white') +
                ' uppercase font-semibold text-sm md:text-base'
              }
            >
              Generate AI
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl text-center text-white font-bold uppercase">
              Search for a Recipe
            </h2>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white font-bold text-lg"
              >
                Name or Ingredients
              </label>
              <input
                type="text"
                id="ingredient"
                name="ingredient"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
                placeholder="e.g. Drinks, Vodka, Gin, Coffee."
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white font-bold text-lg"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option value="">-- Select --</option>
                {categories.drinks.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Search Recipes"
              className="cursor-pointer bg-orange-700 hover:bg-orange-800 transition-colors duration-500 ease-in-out text-white font-semibold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
