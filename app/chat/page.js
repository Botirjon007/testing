"use client"
import React, { useState } from "react";
import axios from "axios";
import OpenAI from "openai";

const openai = new OpenAI({
  organization: "org-hSVfLNbglMI7FgkrtZlZLfF8",
});

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () => {
    if (!currentMessage.trim()) return; // Don't send empty messages

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: currentMessage, user: true },
    ]);
    setCurrentMessage(""); // Clear the input field after sending message

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          prompt: currentMessage,
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: "Bearer YOUR_API_KEY", // Replace with your actual API key
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse = response.data.choices[0].text.trim();

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, user: false },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = () => {
    sendMessage();
  };

  const renderMessages = () => {
    return messages.map((msg, index) => (
      <div key={index} className={msg.user ? "user-message" : "bot-message"}>
        {msg.text}
      </div>
    ));
  };

  return (
    <div>
      <div className="chat-container">{renderMessages()}</div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1 }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;