import { NavLink } from 'react-router-dom';

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
