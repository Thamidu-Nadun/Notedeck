import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';

const Home = lazy (() => import ('./pages/Home/Home'));
const SlidesView = lazy (() => import ('./pages/SlidesView/SlidesView'));
const SlideCreate = lazy (() => import ('./pages/SlideCreate/SlideCreate'));
const SlideToolBar = lazy (() => import ('./pages/SlideToolBar/SlideToolBar'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slides" element={<SlidesView />} />
        <Route path="/slides/create" element={<SlideCreate />} />
        <Route path="/slides/actions" element={<SlideToolBar />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default App;
