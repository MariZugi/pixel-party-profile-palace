
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

export const PixelBorder = () => (
  <div className="border-4 border-y2k-purple rounded-lg p-4 my-4 bg-white" style={{
    borderStyle: 'solid',
    borderWidth: '6px',
    borderImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h8v8H0zM16 0h8v8h-8zM0 16h8v8H0zM16 16h8v8h-8z\' fill=\'%238163BF\'/%3E%3C/svg%3E") 25%'
  }}>
    <div className="text-center font-bold text-y2k-purple">
      Pixel Border Content
    </div>
  </div>
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
