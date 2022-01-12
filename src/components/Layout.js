import { Outlet } from 'react-router-dom';

import ErrorBoundary from '../pages/Error';
import Header from './Header';

const Layout = () => {
  return (
    <div className="p-2">
      <Header />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
};

export default Layout;
