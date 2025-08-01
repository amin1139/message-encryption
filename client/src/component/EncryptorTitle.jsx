import React from 'react';

export default function EncryptorTitle() {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-pulse">
        ENCRYPT YOUR MESSAGE
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
        INTO EMOJI 
      </h2> 🔐✨


      <div className="mt-4 flex justify-center space-x-2">
        {["🎭", "🌟", "🚀", "💎", "🔥"].map((emoji, i) => (
          <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
            {emoji}
          </span>
        ))}
      </div>

            <span className='text-1xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent'>Transform your secret messages into fun emoji codes that only you and your friends can understand! </span>🔐

    </div>
  );
}