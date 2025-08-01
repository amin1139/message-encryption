import React from 'react';

export default function MessageInput({ message, setMessage }) {
  return (
    <div className="w-full md:w-1/2">
      <label className="block mb-1 text-white font-semibold">Your Secret Message</label>
      <textarea
        className="w-full p-3 rounded bg-gray-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        rows={5}
        placeholder="Type your secret message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}
