import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Stories() {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  // Fetch all stories from backend
  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/stories');
      setStories(res.data);
    } catch (err) {
      console.error('Error fetching stories:', err);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this story?');
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/stories/${id}`);
      setStories(stories.filter((story) => story._id !== id));
    } catch (error) {
      console.error('Error deleting story:', error);
    }
  };

  return (
    <div className="p-8 bg-purple-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Published Stories</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {stories.map((story) => (
          <div
            key={story._id}
            className="bg-white shadow-md rounded p-6 hover:shadow-lg transition"
          >
            <Link to={`/stories/${story._id}`}>
              <h2 className="text-xl font-semibold text-purple-800">{story.title}</h2>
              <p className="text-sm text-gray-500 mb-2">By {story.author}</p>
              <p className="text-gray-700 truncate">{story.content}</p>
            </Link>
            <button
              onClick={() => handleDelete(story._id)}
              className="mt-4 bg-purple-300 text-purple-800 px-4 py-1 rounded hover:bg-purple-400 transition"
            >
              Delete
            </button>
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
