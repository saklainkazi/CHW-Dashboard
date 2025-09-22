import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import CHWHeader from '../../components/CHWHeader';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication
    if (username === 'chw' && password === 'password') {
      navigate('/chw/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      {/* <CHWHeader title="SehatSathi CHW Portal" /> */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">CHW Login</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-500 text-sm text-center">
          Use <span className="font-semibold">chw/password</span> to login
        </p>
      </div>
    </div>
  );
}
