import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
    message: {
        type: String,
        required: [true, 'message is required']
    },
    passkey: {
        type: String,
        required: [true, 'passkey is required']
    },
    emojiEncrypted: {
        type: String, 
        required: true    
    }
})

const Message = mongoose.model("Message", MessageSchema);
export default Message;