import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome</h1>

          <p className="mb-5">to get started, create an account</p>

          <div className="flex flex-row w-full">
            <Link to="login" className="flex-grow">
              <button className="btn btn-primary">Login</button>
            </Link>
            <div className="divider divider-vertical">OR</div>
            <Link to="signup" className="flex-grow">
              <button className="btn btn-primary">Sign up</button>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Home;
