import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim()) {
      // You can store the email in localStorage if needed
      navigate('/home');
    } else {
      alert("Please enter your email");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-3/5 bg-purple-100 flex items-center justify-center">
        <h1 className="text-4xl text-purple-800 font-bold p-10">
          Welcome to Anjali's Story Hub 🌸 <br /> Read. Feel. Connect.
        </h1>
      </div>
      <div className="w-2/5 bg-white flex flex-col justify-center items-center p-10 shadow-lg">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Gmail"
          className="border border-purple-400 p-3 rounded w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
