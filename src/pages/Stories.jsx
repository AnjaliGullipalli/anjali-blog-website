// src/pages/Stories.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const stories = [
  {
    title: 'The Little Lantern',
    author: 'Anjali',
    content: 'Once upon a time, a small lantern lit the darkest of nights...',
  },
  {
    title: 'Whispers of the Wind',
    author: 'Anjali',
    content: 'The wind carried secrets from mountains to the sea...',
  },
  {
    title: 'A Cup of Chai',
    author: 'Anjali',
    content: 'Every sip of chai brought back memories of monsoon evenings...',
  },
];

function Stories() {
    const navigate = useNavigate();
  const goHome = () => {
    navigate('/') // or '/' depending on your setup
  };

  return (
    <div className="p-8 bg-purple-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Published Stories</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {stories.map((story, index) => (
          <div key={index} className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-semibold text-purple-800">{story.title}</h2>
            <p className="text-sm text-gray-500 mb-2">By {story.author}</p>
            <p className="text-gray-700">{story.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={goHome}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Stories;
