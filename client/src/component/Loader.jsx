import React, { useEffect, useState } from "react";

const emojis = ["🌚", "💦", "🔐", "🔄", "🧠", "🕵️", "🚀"];

export default function EmojiLoader({ interval = 300 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % emojis.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-80">
      <div className="text-6xl animate-pulse">{emojis[index]}</div>
    </div>
  );
}
