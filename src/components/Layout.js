import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeContext } from '../contexts/theme';
import Header from './Header';
import ErrorBoundary from '../pages/Error';
import Loader from '../pages/Loader';

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="min-h-screen w-screen p-2 lg:p-6">
      <ToastContainer theme={theme} />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Layout;
