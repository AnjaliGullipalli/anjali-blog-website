import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Stories" element={<Stories />} />
      </Routes>
    </div>
  );
}

export default App;