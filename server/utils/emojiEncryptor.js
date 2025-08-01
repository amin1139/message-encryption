const emojiMap = [
    "😀", "😂", "🌚", "😎", "😍", "😡", "😱", "🤖", "👻", "🐶",
    "🐱", "🐵", "🍕", "🌮", "🚀", "💦", "💀", "🔥", "💩", "🧠"
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const encryptToEmojis = (message, passkey) =>{
    const emojiCount = getRandomInt(5, 15); 
    let result = "";

    for (let i = 0; i < emojiCount; i++) {
        const randomIndex = Math.floor(Math.random() * emojiMap.length);
        result += emojiMap[randomIndex];
    }

    return result;
}


export default encryptToEmojis