import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Stories from './pages/Stories';
import FullStory from './pages/FullStory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/stories/:id" element={<FullStory />} />
    </Routes>
  );
}

export default App;
