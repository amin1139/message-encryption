import React, { useState } from 'react';
import EncryptorTitle from './component/EncryptorTitle';
import ModeToggle from './component/ModeToggle';
import EncryptorForm from './component/EncryptorForm';
import ResultDisplay from './component/ResultDisplay';
import useOnlineStatus from "./utils/useOnlineStatus";
import EmojiLoader from './component/Loader.jsx';
import { decryptedMessage, encryptedMessage } from '../src/utils/api.js';

export default function App() {
  const [mode, setMode] = useState('encrypt');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [resPasskey, setResPasskey] = useState('');
  const [decryptValidation, setDecryptValidation] = useState(false);
  const [validation, setValidation] = useState('');
  const [loading, setLoading] = useState(false);
  const status = useOnlineStatus()

  const handleEncrypt = () => {
    if (!message || !password) {
      setValidation(true);
      setTimeout(() => setValidation(false), 3000)
      return;
    }
    
    encryptedMessage(message,password, setDecryptValidation, setResult,setMessage, setPassword, setResPasskey,setLoading )
  };

  const handleDecrypt = () => {
    if (!message || !password) {
      setValidation(true);
      return;
    }

    decryptedMessage(message, password, setDecryptValidation, setResult, setMessage, setPassword, setResPasskey,setLoading);
  };

  const handleClear = () => {
    setMessage('');
    setPassword('');
    setResult('');
  };

  if(!status){
    return <div className="px-6 py-10 text-3xl font-bold bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">NO INTERNET</div>
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">

      {loading && <EmojiLoader />}
      
      <EncryptorTitle />
      <ModeToggle mode={mode} setMode={setMode} />
      <EncryptorForm
        validation={validation}
        setValidation={setValidation}
        message={message}
        setMessage={setMessage}
        password={password}
        setPassword={setPassword}
        onEncrypt={mode === 'encrypt' ? handleEncrypt : handleDecrypt}
        onClear={handleClear}
        mode={mode}
        decryptValidation={ decryptValidation }
      />
      
      {result && <ResultDisplay result={result}/>}
      
      {resPasskey && <ResultDisplay result={resPasskey}/>}

      <div className="mt-16 text-center text-sm text-gray-500">
        Made with ❤️ for secure and fun messaging
      </div>
    </div>
  );
}
