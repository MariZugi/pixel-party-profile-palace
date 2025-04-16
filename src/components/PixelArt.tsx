
import React from 'react';

export const Cursor = () => (
  <div className="inline-block animate-sparkle">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#BF3B84" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l2.2 6.6h7.1l-5.8 4.2 2.2 6.6-5.8-4.2-5.8 4.2 2.2-6.6-5.8-4.2h7.1z" />
    </svg>
  </div>
);

export const PixelHeart = () => (
  <div className="inline-block animate-sparkle">
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill="#BF3B84" d="M5 2H3v2H1v2h2v2h2V6h2V4H5V2zm10 2h-6v2h2v2h2v2h-2v2h-2v2h2v-2h2v-2h2v-2h2V6h-2V4z"/>
    </svg>
  </div>
);

export const PixelStar = () => (
  <div className="inline-block animate-sparkle">
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill="#95CA54" d="M10 2l1.5 4.5H16l-3.5 3 1.5 4.5-4-3-4 3 1.5-4.5-3.5-3h4.5z"/>
    </svg>
  </div>
);

export const PixelBrokenHeart = () => (
  <div className="inline-block animate-sparkle">
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill="#BF3B84" d="M5 2H3v2H1v2h2v2h2V6h2V4H5V2zm10 2h-6v2h2v2h-2v2h2v-2h2v-2h2V6h-2V4zM7 10v2h2v2H7v2h4v-2h2v-2h-2v-2H7z"/>
    </svg>
  </div>
);

export const PixelBat = () => (
  <div className="inline-block animate-sparkle">
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill="#333" d="M2 6h2v2H2V6zm14 0h2v2h-2V6zM4 4h2v2H4V4zm10 0h2v2h-2V4zM6 2h8v2H6V2zM4 8h12v2H4V8zm2 2h2v4H6v-4zm6 0h2v4h-2v-4zm-4 4h4v2H8v-2z"/>
    </svg>
  </div>
);

export const PixelSkull = () => (
  <div className="inline-block animate-sparkle">
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill="#8163BF" d="M6 2h8v2H6V2zM4 4h12v8H4V4zM6 12h2v2H6v-2zm6 0h2v2h-2v-2zM8 14h4v2H8v-2zm-2-6h2v2H6V8zm6 0h2v2h-2V8z"/>
    </svg>
  </div>
);

export const PixelBorder = () => (
  <div className="border-4 border-y2k-purple rounded-lg p-4 my-4 bg-gradient-to-b from-gray-900 to-gray-800" style={{
    borderStyle: 'solid',
    borderWidth: '6px',
    borderImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h8v8H0zM16 0h8v8h-8zM0 16h8v8H0zM16 16h8v8h-8z\' fill=\'%238163BF\'/%3E%3C/svg%3E") 25%'
  }}>
    <div className="text-center font-bold text-y2k-purple">
      Pixel Border Content
    </div>
  </div>
);

export const EmoPixelBorder = () => (
  <div className="border-4 p-4 my-4 bg-gradient-to-b from-gray-900 to-gray-800 relative" style={{
    borderStyle: 'solid',
    borderWidth: '6px',
    borderImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h8v8H0zM16 0h8v8h-8zM0 16h8v8H0zM16 16h8v8h-8z\' fill=\'%23BF3B84\'/%3E%3C/svg%3E") 25%'
  }}>
    <div className="absolute -top-3 -left-3">
      <PixelSkull />
    </div>
    <div className="absolute -top-3 -right-3">
      <PixelBrokenHeart />
    </div>
    <div className="absolute -bottom-3 -left-3">
      <PixelBat />
    </div>
    <div className="absolute -bottom-3 -right-3">
      <PixelSkull />
    </div>
    <div className="text-center font-bold text-y2k-pink drop-shadow-[0_0_5px_rgba(191,59,132,0.7)]">
      Emo Pixel Border
    </div>
  </div>
);

export const GlitterOverlay = () => (
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: '4px',
          height: '4px',
          background: '#fff',
          borderRadius: '50%',
          boxShadow: '0 0 5px 2px rgba(255, 255, 255, 0.7)',
          opacity: Math.random() * 0.5 + 0.3,
          animationDuration: `${Math.random() * 3 + 1}s`
        }}
      />
    ))}
  </div>
);

export const DarkGlowButton = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="relative overflow-hidden bg-gray-900 text-y2k-pink hover:bg-black px-4 py-2 rounded-lg font-bold transition-all transform hover:scale-105"
    style={{
      boxShadow: '0 0 10px rgba(191, 59, 132, 0.5)',
      textShadow: '0 0 5px rgba(191, 59, 132, 0.7)'
    }}
  >
    <div className="relative z-10">{children}</div>
    <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-y2k-purple via-black to-y2k-pink"></div>
  </button>
);

export const VisitorCounter = ({ count }: { count: number }) => (
  <div className="bg-black inline-block p-1 rounded">
    {count.toString().padStart(6, '0').split('').map((digit, i) => (
      <span key={i} className="inline-block w-5 h-8 bg-black text-y2k-lime font-mono font-bold text-center">
        {digit}
      </span>
    ))}
  </div>
);

export const GothicDivider = () => (
  <div className="flex items-center my-4">
    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-y2k-pink to-transparent"></div>
    <div className="mx-2 text-y2k-pink">
      <PixelSkull />
    </div>
    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-y2k-purple to-transparent"></div>
  </div>
);

export const EmoBox = ({ children }: { children: React.ReactNode }) => (
  <div className="relative p-5 my-4 rounded-lg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2720%27 height=%2720%27 viewBox=%270 0 20 20%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M10 2l1.5 4.5H16l-3.5 3 1.5 4.5-4-3-4 3 1.5-4.5-3.5-3h4.5z%27 fill=%27%238163BF%27 fill-opacity=%270.1%27/%3E%3C/svg%3E')] opacity-10"></div>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-y2k-pink to-transparent"></div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-y2k-purple to-transparent"></div>
    <div className="relative">
      {children}
    </div>
    <GlitterOverlay />
  </div>
);

