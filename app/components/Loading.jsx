import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Increases by 2% every 100ms = 5 seconds total
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Calculate color transition based on progress (black to baby pink)
  const getBackgroundColor = () => {
    // Start with black (0,0,0) and transition to baby pink (#FFC0CB or rgb(255, 192, 203))
    const r = Math.min(255, progress * 2.55);
    const g = Math.min(192, progress * 1.92);
    const b = Math.min(203, progress * 2.03);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const getTextColor = () => {
    return progress < 50 ? '#22c55e' : '#f194c3';
  };

  const getBorderColor = () => {
    return progress < 50 ? '#22c55e' : '#f194c3';
  };

  const getProgressBarColor = () => {
    return progress < 50 ? '#22c55e' : '#f194c3';
  };

  const getMessage = () => {
    if (progress < 25) return '> AUTHENTICATING...';
    if (progress < 50) return '> ACCESSING DATABASE...';
    if (progress < 75) return '💝 LOADING...';
    return '💕 BE THERE IN A HEARTBEAT!';
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative transition-all duration-500"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {/* Binary code that fades out */}
      <div className="absolute inset-0" style={{ opacity: Math.max(0, (50 - progress) / 50) }}>
        <div className="text-green-500 text-xs font-mono absolute animate-pulse" style={{ top: '10%', left: '5%' }}>01010011</div>
        <div className="text-green-500 text-xs font-mono absolute animate-pulse" style={{ top: '30%', left: '80%', animationDelay: '0.5s' }}>11001010</div>
        <div className="text-green-500 text-xs font-mono absolute animate-pulse" style={{ top: '60%', left: '15%', animationDelay: '1s' }}>10110101</div>
        <div className="text-green-500 text-xs font-mono absolute animate-pulse" style={{ top: '80%', left: '70%', animationDelay: '1.5s' }}>01101110</div>
      </div>

      {/* Hearts that fade in */}
      <div className="absolute inset-0" style={{ opacity: Math.min(1, (progress - 50) / 50) }}>
        <div className="text-pink-400 text-4xl absolute animate-pulse" style={{ top: '15%', left: '10%' }}>💕</div>
        <div className="text-pink-500 text-3xl absolute animate-pulse" style={{ top: '25%', left: '85%', animationDelay: '0.3s' }}>💖</div>
        <div className="text-pink-400 text-5xl absolute animate-pulse" style={{ top: '70%', left: '20%', animationDelay: '0.6s' }}>💗</div>
        <div className="text-pink-500 text-4xl absolute animate-pulse" style={{ top: '60%', left: '75%', animationDelay: '0.9s' }}>💝</div>
      </div>
      
      <div 
        className="rounded-lg shadow-2xl p-8 max-w-md w-full relative z-10 transition-all duration-500"
        style={{ 
          backgroundColor: progress < 50 ? '#072617' : '#f7c7e1',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: getBorderColor()
        }}
      >
        <h2 
          className="text-2xl font-bold text-center mb-6 transition-all duration-500"
          style={{ 
            color: getTextColor(),
            fontFamily: progress < 50 ? 'monospace' : 'inherit'
          }}
        >
          {getMessage()}
        </h2>
        
        {/* Progress Bar Container */}
        <div 
          className="w-full rounded-full h-4 overflow-hidden shadow-inner transition-all duration-500"
          style={{ 
            backgroundColor: progress < 50 ? '#1f2937' : '#fce7f3'
          }}
        >
          {/* Progress Bar Fill */}
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{ 
              width: `${progress}%`,
              backgroundColor: getProgressBarColor(),
              boxShadow: `0 0 10px ${getProgressBarColor()}`
            }}
          ></div>
        </div>
        
        {/* Progress Percentage */}
        <p 
          className="text-center mt-3 font-medium transition-all duration-500"
          style={{ 
            color: getTextColor(),
            fontFamily: progress < 50 ? 'monospace' : 'inherit'
          }}
        >
          {progress}%
        </p>

        {/* Transition indicator */}
        {progress >= 40 && progress <= 60 && (
          <p className="text-center mt-2 text-sm animate-pulse" style={{ color: getTextColor() }}>
            {progress < 50 ? '🔓 Security bypassed...' : '💞 Welcome love...'}
          </p>
        )}
      </div>
    </div>
  );
}