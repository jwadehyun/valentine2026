import React, { useState, useEffect } from 'react';

export default function PasswordScreen({ password, setPassword, onSubmit }) {
  const [typedText, setTypedText] = useState('');
  const fullText = '> CONFIDENTIAL_';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Matrix-style background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="text-green-500 text-xs font-mono absolute animate-pulse" style={{ top: '10%', left: '5%' }}>01010011</div>
        <div className="text-green-500 text-xs font-mono absolute animate-pulse" style={{ top: '30%', left: '80%', animationDelay: '0.5s' }}>11001010</div>
        <div className="text-green-500 text-xs font-mono absolute animate-pulse" style={{ top: '60%', left: '15%', animationDelay: '1s' }}>10110101</div>
        <div className="text-green-500 text-xs font-mono absolute animate-pulse" style={{ top: '80%', left: '70%', animationDelay: '1.5s' }}>01101110</div>
        <div className="text-green-500 text-xs font-mono absolute animate-pulse" style={{ top: '20%', left: '40%', animationDelay: '0.3s' }}>11010011</div>
      </div>
      
      <div className="bg-gray-900 border-2 border-green-500 rounded-lg shadow-2xl p-8 max-w-md w-full relative z-10 font-mono">
        {/* Glowing header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-green-500 mb-2 tracking-wider animate-pulse">
            {typedText}
          </h1>
          <div className="h-1 bg-gradient-to-r from-green-500 to-transparent"></div>
        </div>
        
        <form onSubmit={onSubmit}>
          {/* Terminal-style input */}
          <div className="mb-4">
            <label className="text-green-400 text-sm mb-2 block tracking-wide">
              {'> ENTER_PASSKEY:'}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="***********"
              className="w-full px-4 py-3 bg-black border-2 border-green-500 text-green-400 rounded font-mono focus:outline-none focus:border-green-300 focus:shadow-lg focus:shadow-green-500/50 placeholder-green-800"
              style={{ caretColor: '#22c55e' }}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 text-black py-3 rounded font-bold tracking-widest hover:bg-green-500 transition transform hover:scale-105 shadow-lg shadow-green-600/50 border border-green-400"
          >
            {'>> AUTHENTICATE <<'}
          </button>
        </form>
        
        {/* Hacker hint */}
        <div className="mt-6 pt-4 border-t border-green-900">
          <p className="text-xs text-green-600 font-mono">
            {'[HINT]: 🥝🍎🍊🥑🍎🍑'}
          </p>
          <p className="text-xs text-green-800 mt-1 font-mono">
            {'[STATUS]: SECURITY_LEVEL_MAX'}
          </p>
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-2 left-2 text-green-500 text-xs opacity-50">◢</div>
        <div className="absolute top-2 right-2 text-green-500 text-xs opacity-50">◣</div>
        <div className="absolute bottom-2 left-2 text-green-500 text-xs opacity-50">◥</div>
        <div className="absolute bottom-2 right-2 text-green-500 text-xs opacity-50">◤</div>
      </div>
      
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}