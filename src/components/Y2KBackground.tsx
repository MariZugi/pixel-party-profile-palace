
import React from 'react';

const Y2KBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="absolute animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 16 + 10}px`
          }}
        >
          ✦
        </div>
      ))}

      {/* Grid Lines */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #BF3B84 1px, transparent 1px), linear-gradient(to bottom, #8163BF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-20 h-20 text-y2k-pink opacity-30">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-20 h-20 text-y2k-lime opacity-30">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M0 0 L100 0 L100 100 L80 100 L80 20 L0 20 Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-20 h-20 text-y2k-teal opacity-30">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M0 0 L20 0 L20 80 L100 80 L100 100 L0 100 Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-20 h-20 text-y2k-purple opacity-30">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M80 0 L100 0 L100 100 L0 100 L0 80 L80 80 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Y2KBackground;
