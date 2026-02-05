import React from 'react';
import FallingSweethearts from '../FallingSweethearts';

export default function TheQuestion({ onResponse, sweethearts }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-200 flex items-center justify-center p-4 relative">
      <FallingSweethearts sweethearts={sweethearts} />
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold mb-8 text-red-600 animate-pulse">
          Will you be my Valentine? 💝
        </h1>
        <div className="flex gap-6 justify-center">
          <button
            onClick={() => onResponse('yes')}
            className="bg-green-500 text-white px-12 py-4 rounded-lg text-2xl font-bold hover:bg-green-600 transition transform hover:scale-110"
          >
            Yes! 💚
          </button>
          <button
            onClick={() => onResponse('no')}
            className="bg-gray-500 text-white px-12 py-4 rounded-lg text-2xl font-bold hover:bg-gray-600 transition transform hover:scale-110"
          >
            No 💔
          </button>
        </div>
      </div>
    </div>
  );
}