import React from "react";
import "./chatbot.css";
import chat from "../../assets/chat.png";

const Chatbot = () => {
  return (
    <div className="chatbot__container">
      <img src={chat} alt="chat" />
    </div>
  );
};

export default Chatbot;
