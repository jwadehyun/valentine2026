import React from 'react';
import FallingSweethearts from '../FallingSweethearts';

export default function PasswordScreen({ password, setPassword, onSubmit, sweethearts }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4 relative">
      <FallingSweethearts sweethearts={sweethearts} />
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative z-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">🔒 Enter Password</h1>
        <form onSubmit={onSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg mb-4 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition"
          >
            Submit
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">Hint: valentine2026</p>
      </div>
    </div>
  );
}