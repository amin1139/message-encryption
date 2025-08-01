import Message from "../models/post.model.js";
import encryptToEmojis from "../utils/emojiEncryptor.js";

const encryptMessage = async (req, res) => {
    const { message, passkey } = req.body;

    if (!message || !passkey) {
        return res.status(400).json({ error: "Message and Passkey are required" });
    }

    const emojiEncrypted = encryptToEmojis(message, passkey);

    try {
        const newEntry = new Message({
            message,
            passkey,
            emojiEncrypted
        });

        await newEntry.save();
        return res.json({ emojiEncrypted, passkey });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to save message" });
    }
};

export { encryptMessage}