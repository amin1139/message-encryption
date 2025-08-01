import React from 'react';
import { Shield, Unlock } from 'lucide-react';

export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="mb-6 flex justify-center">
      <div className="bg-white/5 p-1 rounded-2xl border border-white/10">
        <div className="flex relative">
          <button
            onClick={() => setMode('encrypt')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 relative z-10 ${
              mode === 'encrypt' ? 'text-white shadow-lg' : 'text-white/60 hover:text-white/80'
            }`}
          >
            <Shield className="w-4 h-4" />
            Encrypt
          </button>
          <button
            onClick={() => setMode('decrypt')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 relative z-10 ${
              mode === 'decrypt' ? 'text-white shadow-lg' : 'text-white/60 hover:text-white/80'
            }`}
          >
            <Unlock className="w-4 h-4" />
            Decrypt
          </button>
          <div
            className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl transition-all duration-300 ease-out ${
              mode === 'encrypt' ? 'left-1' : 'left-1/2'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
