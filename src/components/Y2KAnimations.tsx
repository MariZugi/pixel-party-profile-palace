
import React from 'react';

export const SparkleText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute -left-4 top-0 text-y2k-pink animate-sparkle delay-100">✦</span>
      <span className="absolute -right-4 top-0 text-y2k-pink animate-sparkle delay-300">✦</span>
    </span>
  );
};

export const BlinkText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="animate-blink">{children}</span>
  );
};

export const RainbowText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span 
      className="font-bold"
      style={{
        backgroundImage: 'linear-gradient(45deg, #8163BF, #95CA54, #76C394, #BF3B84)',
        backgroundSize: '400% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        animation: 'rainbow 8s linear infinite'
      }}
    >
      {children}
    </span>
  );
};

export const MarqueeText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div className="animate-marquee inline-block">
        {children}
      </div>
    </div>
  );
};

export const GlitterButton: React.FC<{ 
  children: React.ReactNode, 
  onClick?: (e: React.FormEvent) => void 
}> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="relative overflow-hidden bg-y2k-purple text-white hover:bg-y2k-pink px-4 py-2 rounded-lg font-bold transition-colors"
      style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.7rem' }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 w-full h-full" style={{
        background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'2\' fill=\'%23ffffff60\'/%3E%3Ccircle cx=\'30\' cy=\'40\' r=\'2\' fill=\'%23ffffff60\'/%3E%3Ccircle cx=\'50\' cy=\'20\' r=\'2\' fill=\'%23ffffff60\'/%3E%3Ccircle cx=\'70\' cy=\'50\' r=\'2\' fill=\'%23ffffff60\'/%3E%3Ccircle cx=\'90\' cy=\'30\' r=\'2\' fill=\'%23ffffff60\'/%3E%3C/svg%3E")',
        opacity: 0.5,
        animation: 'sparkle 2s infinite'
      }}></span>
    </button>
  );
};

export const BouncingText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex justify-center space-x-1">
      {text.split('').map((char, i) => (
        <div 
          key={i} 
          className="animate-bounce" 
          style={{ 
            animationDuration: '1s',
            animationDelay: `${i * 0.1}s` 
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};
