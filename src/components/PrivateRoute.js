import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const authToken = localStorage.getItem('token');
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
