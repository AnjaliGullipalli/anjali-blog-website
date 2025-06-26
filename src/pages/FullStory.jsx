import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FullStory() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/stories/${id}`)
      .then((res) => setStory(res.data))
      .catch((err) => console.error('Error fetching story:', err));
  }, [id]);

  const handleCommentSubmit = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/api/stories/${id}/comments`, {
        text: comment,
      });
      setStory(res.data);
      setComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  if (!story) return <div>Loading...</div>;

  return (
    <div className="p-8 bg-purple-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-3xl font-bold text-purple-800">{story.title}</h1>
        <p className="text-sm text-gray-500 mb-4">By {story.author}</p>
        <p className="text-gray-700 whitespace-pre-wrap mb-6">{story.content}</p>

        {/* Comments Section */}
        <h2 className="text-xl font-semibold text-purple-700 mt-8 mb-2">Comments</h2>
        <div className="space-y-2 mb-4">
          {story.comments && story.comments.length > 0 ? (
            story.comments.map((c, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded shadow-sm">
                {c.text}
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No comments yet.</p>
          )}
        </div>

        {/* Add Comment */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            className="flex-grow px-4 py-2 border rounded"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullStory;
