import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  // Check if the current path is the home page
  const isHome = useMemo(() => pathname === '/', [pathname]);

  console.log(pathname);

  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logoType" />
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-semibold'
                  : 'text-white uppercase font-semibold'
              }
            >
              Start
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-semibold'
                  : 'text-white uppercase font-semibold'
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
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
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white font-bold text-lg"
              >
                Category
              </label>
              <select
                id="ingredient"
                name="ingredient"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
              >
                <option value="">-- Select --</option>
              </select>
            </div>
            <input
              type="submit"
              value="Search Recipes"
              className="cursor-pointer bg-orange-700 hover:bg-orange-800 text-white font-semibold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
