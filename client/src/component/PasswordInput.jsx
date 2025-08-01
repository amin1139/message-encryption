import React, { useState } from 'react';

export default function PasswordInput({ password, setPassword, mode }) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full md:w-1/2">
      <label className="block mb-1 text-white font-semibold">Encryption Password</label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder= {mode === 'encrypt' ? "Enter a strong password..." : 'Enter password to decrypt...'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-3 top-3 text-gray-300 hover:text-white"
          onClick={() => setShow(!show)}
        >
          {show ? '🙈' : '👁️'}
        </button>
      </div>
    </div>
  );
}
