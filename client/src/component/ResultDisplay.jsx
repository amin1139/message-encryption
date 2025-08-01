import { Copy } from 'lucide-react';
import { ClipboardCheck } from 'lucide-react';
import React, { useState } from 'react';
import { toast, Toaster } from 'sonner';

export default function ResultDisplay({result}) {

  const [copied, setCopied] = useState(false);
  

  const handleCopy = async () => {
    navigator.clipboard.writeText(result)
      .then(() => {
        setCopied(true);
        toast.success("Message Copied");
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
        toast.error("Failed to copy");
      });
  };

  return (
    <div className="relative">
      <h3></h3>
      <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md text-white">
        {result}
      </div>
      <button
        type="button"
        className="absolute right-3 top-3 text-gray-300 hover:text-white hover:cursor-pointer"
        onClick={handleCopy}
      >
        {copied ? <ClipboardCheck className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
      </button>
      <Toaster position="top-center" richColors />
    </div>
  );
}
