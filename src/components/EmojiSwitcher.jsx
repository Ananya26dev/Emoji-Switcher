import React, { useState } from "react";

const EmojiSwitcher = () => {
  const emojis = [
    "🍕",
    "🍔",
    "🍟",
    "🌭",
    "🍿",
    "🍳",
    "🍤",
    "🍜",
    "🥘",
    "🎂",
    "🍯",
    "🍭",
    "🍬",
    "🍫",
    "🧁",
    "🥧",
    "🍄",
    "🥝",
    "🍍",
    "🧃",
    "☕",
    "🍮",
    "🎂",
    "🍰",
  ]; //Windows Key + .
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
  const handleEmojiSwitching = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setCurrentEmoji(emojis[randomIndex]);
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center vh-100">
        <div className="col text-center">
          <h1>Emoji Switcher</h1>
          <div onMouseOver={handleEmojiSwitching}>
            <span className="emoji">{currentEmoji}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmojiSwitcher;
