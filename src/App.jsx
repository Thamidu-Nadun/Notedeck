import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const Home = lazy (() => import ('./pages/Home/Home'));
const SlidesView = lazy (() => import ('./pages/SlidesView/SlidesView'));
const SlideCreate = lazy (() => import ('./pages/SlideCreate/SlideCreate'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slides" element={<SlidesView />} />
        <Route path="/slides/create" element={<SlideCreate />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default App;
