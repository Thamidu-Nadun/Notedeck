import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const Home = lazy (() => import ('./layout/Home/Home'));
const SlideWrapper = lazy (() =>
  import ('./components/SlideWrapper/SlideWrapper')
);

const mdContent = `
# Slide 1

---

#
`.trim ();

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slides" element={<SlideWrapper markdown={mdContent} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default App;
