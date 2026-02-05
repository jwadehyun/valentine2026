import React from 'react';

export default function FallingSweethearts({ sweethearts }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sweethearts.map((sweet) => (
        <div
          key={sweet.id}
          className={`absolute ${sweet.color} rounded-full flex items-center justify-center shadow-lg`}
          style={{
            left: `${sweet.left}%`,
            width: '60px',
            height: '50px',
            animation: `fallSweetheart ${sweet.duration}s linear infinite`,
            animationDelay: `${sweet.delay}s`,
            top: `-60px`,
          }}
        >
          <span className="text-xs font-bold text-red-500" style={{ fontSize: '8px' }}>
            {sweet.message}
          </span>
        </div>
      ))}
      <style jsx>{`
        @keyframes fallSweetheart {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}