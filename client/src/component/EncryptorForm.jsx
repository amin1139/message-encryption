import React from "react";
import MessageInput from "./MessageInput";
import PasswordInput from "./PasswordInput";

export default function EncryptorForm({
  message,
  setMessage,
  password,
  setPassword,
  onEncrypt,
  onClear,
  mode,
  validation,
  decryptValidation
}){ 
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 mb-6">
      <MessageInput message={message} setMessage={setMessage} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        mode={mode}
      />
      <div>{validation && <h3 className="text-red-500 text-sm mt-2"> Please fill in all fields before proceeding. </h3>}</div>

      <div>{decryptValidation && <h3 className="text-red-800 text-sm mt-2">{decryptValidation}</h3>}</div>
      
      <div className="w-full flex flex-col justify-center gap-4 mt-4 md:mt-0">
        <button
          onClick={onEncrypt}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          {mode === "encrypt" ? "🔐 Encrypt Message" : "Decrypt Message"}
        </button>
        <button
          onClick={onClear}
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border border-white"
        >
          ❌ Clear All
        </button>
      </div>
    </div>
  );
}
