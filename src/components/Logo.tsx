import React from 'react';

export function Logo() {
  return (
    <div className="relative w-16 h-16 transform rotate-45 bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="absolute inset-0 flex items-center justify-center -rotate-45">
        <span className="text-white font-bold text-xl tracking-wider">HSS</span>
      </div>
      <div className="absolute -top-1 -left-1 w-full h-full border-2 border-indigo-300 transform scale-105"></div>
      <div className="absolute -bottom-1 -right-1 w-full h-full border-2 border-purple-300 transform scale-95"></div>
    </div>
  );
}