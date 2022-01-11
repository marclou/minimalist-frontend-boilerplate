import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './pages/Loader';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<div>home bro</div>} />

          <Route path="login" element={<div>LOGIN</div>} />

          <Route path="*" element={<div>HOME</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
