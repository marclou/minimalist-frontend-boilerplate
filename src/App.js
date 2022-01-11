import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './pages/Loader';
import Home from './pages/Home';
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="login" element={<div>LOGIN</div>} />

          <Route path="signup" element={<div>REGISTER</div>} />

          <Route path="dashboard" element={<PrivateRoute />}>
            <Route element={<h1>yo</h1>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
