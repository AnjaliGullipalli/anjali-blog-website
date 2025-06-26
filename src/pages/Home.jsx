import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-50">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">Welcome to Story Hub</h1>
      <button
        onClick={() => navigate('/stories')}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
      >
        Read Stories
      </button>
    </div>
  );
}

export default Home;
