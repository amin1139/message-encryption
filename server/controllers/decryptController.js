import Message from "../models/post.model.js";

const decryptMessage = async (req, res) => {
    const { emojiEncrypted, passkey } = req.body;

    if (!emojiEncrypted || !passkey) {
        return res.status(400).json({ error: "emojiEncrypted and passkey are required" });
    }

    try {
        const result = await Message.findOne({ emojiEncrypted, passkey });

        if (!result) {
            return res.status(401).json({
                error: "Encrypted Emoji or Passkey or both are Incorrect"
            });
        }

        return res.json({ originalMessage: result.message });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default decryptMessage;