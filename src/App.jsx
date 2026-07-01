import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TechPortfolio from './pages/TechPortfolio';
import VideoPortfolio from './pages/VideoPortfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tech" element={<TechPortfolio />} />
      <Route path="/video" element={<VideoPortfolio />} />
    </Routes>
  );
}

export default App;
