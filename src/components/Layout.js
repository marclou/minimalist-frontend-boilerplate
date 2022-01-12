import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = () => {
  return (
    <div className="p-2">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
