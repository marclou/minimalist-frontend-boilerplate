import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const authToken = localStorage.getItem('tokens');

  useEffect(() => {
    if (!authToken) {
      toast.error('You need to Log In first');
    }
  }, []);

  return authToken ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
