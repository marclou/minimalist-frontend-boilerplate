import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components';
import Home from './pages/Home';

const NotFound = lazy(() => import('./pages/NotFound'));
const Signup = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="signup" element={<Signup />} />

          <Route path="login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<h1>yo</h1>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
