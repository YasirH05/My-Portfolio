
import { Routes, Route, Navigate } from 'react-router-dom';
import TechPortfolio from './pages/TechPortfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TechPortfolio />} />
      <Route path="/tech" element={<Navigate to="/" replace />} />
      <Route path="/video" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
