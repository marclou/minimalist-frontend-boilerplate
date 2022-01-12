import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box w-full sticky top-2 z-50">
      <Link to="/" className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold">Logo</span>
      </Link>
      <div className="flex px-2 mx-2 navbar-center">
        <div className="flex items-stretch">
          <Link to="login">
            <span className="btn btn-ghost btn-sm rounded-btn">Login</span>
          </Link>
          <Link to="signup">
            <span className="btn btn-ghost btn-sm rounded-btn">Signup</span>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;