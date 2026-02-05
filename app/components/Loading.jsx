import React from 'react';
import FallingSweethearts from '../FallingSweethearts';

export default function LoadingScreen({ sweethearts }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
      <FallingSweethearts sweethearts={sweethearts} />
      <div className="text-center relative z-10">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-purple-500 mb-4"></div>
        <h2 className="text-2xl font-semibold text-purple-600">Loading...</h2>
      </div>
    </div>
  );
}