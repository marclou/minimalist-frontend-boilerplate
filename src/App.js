import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components';
import Home from './pages/Home';

const NotFound = lazy(() => import('./pages/NotFound'));
const Register = lazy(() => import('./pages/Register'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="login" element={<div>LOGIN</div>} />

          <Route path="signup" element={<Register />} />

          <Route path="dashboard" element={<PrivateRoute />}>
            <Route element={<h1>yo</h1>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
