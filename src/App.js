import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './pages/Loader';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<div>home bro</div>} />

          <Route path="login" element={<div>LOGIN</div>} />

          <Route path="register" element={<div>REGISTER</div>} />

          <Route path="dashboard" element={<div>Dashboard</div>}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
