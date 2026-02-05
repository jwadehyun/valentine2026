import React from 'react';

export default function YesResponse({ showConfetti }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-yellow-200 flex items-center justify-center p-4 relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['💖', '💕', '💗', '💝', '🎉', '✨'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}
      
      <div className="text-center z-10">
        <h1 className="text-7xl font-bold mb-8 text-pink-600 animate-bounce">
          Yay! 🎉
        </h1>
        <div className="text-8xl mb-6">
          🌸 🌹 🌺 🌻 🌷
        </div>
        <p className="text-3xl text-pink-700 font-semibold">
          This is going to be amazing! 💕
        </p>
      </div>
      
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        .animate-fall {
          animation: fall linear infinite;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}