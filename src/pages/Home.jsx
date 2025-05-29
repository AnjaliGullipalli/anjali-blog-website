// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-8 text-center bg-purple-50 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome to Anjali's Story Blog</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Dive into a world of emotions, imagination, and life lessons. Every story is a piece of my soul, waiting for you to read.
      </p>
      <div className="space-x-4">
        <Link
          to="/stories"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Read Stories
        </Link>
        <Link
          to="/publish"
          className="border border-purple-600 text-purple-600 px-6 py-2 rounded hover:bg-purple-100 transition"
        >
          Publish Story
        </Link>
      </div>
    </div>
  );
}

export default Home;