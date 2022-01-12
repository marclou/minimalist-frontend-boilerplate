import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './Header';
import ErrorBoundary from '../pages/Error';
import Loader from '../pages/Loader';

const Layout = () => {
  return (
    <div className="min-h-screen w-screen p-2">
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
