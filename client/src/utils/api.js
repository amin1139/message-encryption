import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const encryptedMessage = async (message, password, setDecryptValidation, setResult, setMessage, setPassword, setResPasskey, setLoading) => {
  setLoading(true);
  try {
    const response = await axios.post(`${BACKEND_URL}/encrypt`, {
      message,
      passkey: password,
    });
    
    setResult(response.data.emojiEncrypted);
    setResPasskey(response.data.passkey);
    setMessage('');
    setPassword('');
  } 
  
  catch (error) {
    setDecryptValidation("Encryption failed. Please try again.");
    setTimeout(() => setDecryptValidation(''), 5000);
  }
  setLoading(false);
};

const decryptedMessage = async (message, password, setDecryptValidation, setResult, setMessage, setPassword, setResPasskey, setLoading) => {

  setLoading(true);
  try {
    const response = await axios.post(`${BACKEND_URL}/decrypt`, {
      emojiEncrypted: message,
      passkey: password,
    });
    
    setResult(response.data.originalMessage);
    setMessage('');
    setPassword('');
    setResPasskey('');
  } 
  catch (error) {
    setDecryptValidation(error?.response?.data?.error || error?.message || "Decryption failed. Please try again.");
    setTimeout(() => setDecryptValidation(''), 5000);
  }
  setLoading(false);
}; 

export { encryptedMessage, decryptedMessage };