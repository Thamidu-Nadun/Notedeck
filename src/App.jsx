import React from 'react';
import SlideWrapper from './Components/SlideWrapper/SlideWrapper';
import {Route, Routes} from 'react-router-dom';
import Home from './layout/Home/Home';

const mdContent = `
# Slide 1

---

#
`.trim ();

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/slides" element={<SlideWrapper markdown={mdContent} />} />
    </Routes>
  );
};

export default App;
