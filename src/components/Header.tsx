import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logoType" />
          </div>

          <nav className="flex gap-5">
            <Link className="text-white uppercase font-semibold" to="/">
              Start
            </Link>

            <Link
              className="text-white uppercase font-semibold"
              to="/favorites"
            >
              Favorites
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
