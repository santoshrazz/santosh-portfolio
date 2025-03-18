"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
// import Lottie from "react-lottie";
// import BotFile from "../../public/Lotte/BotAnimation.json";
import robotImage from "./../../public/robot.gif";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi I'm Santosh ! How can I help you today?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, sender: "user" }];
    setMessages(newMessages);
    setInputValue("");

    // call The api to get the response
    try {
      setLoading(true);
      const { data } = await axios.post("/api/chat", { question: inputValue });
      setMessages([...newMessages, { text: data.message, sender: "bot" }]);
    } catch (error) {
      return toast.error("Ai is busy now", {
        removeDelay: 3000,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // const optionsLottie = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: BotFile,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <>
      {/* Chat Icon */}
      {!isOpen && (
        <div
          className="fixed bottom-5 right-5 w-24 h-24 md:w-32 md:h-32 rounded-full flex justify-center items-center cursor-pointer shadow-lg z-50 hover:scale-105 transition-transform duration-300"
          onClick={toggleChat}
        >
          {/* <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M19,16H6l-2,2V5c0-0.5,0.4-1,1-1h14c0.5,0,1,0.5,1,1V15C20,15.5,19.5,16,19,16z" />
          </svg> */}
          <Image
            src={robotImage}
            width={100}
            height={100}
            alt="bot-image"
            className="rounded-full"
            unoptimized
          />
          {/* <Lottie options={optionsLottie} /> */}
        </div>
      )}

      {/* Chat Container */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-[350px] h-[450px] bg-slate-400 dark:bg-white rounded-lg shadow-lg flex flex-col overflow-hidden z-50 md:w-[350px] md:h-[450px] sm:w-full sm:h-full sm:bottom-0 sm:right-0 sm:rounded-none">
          {/* Chat Header */}
          <div className="bg-green-500 text-white p-4 flex justify-between items-center">
            <h3 className="text-base font-medium">Chat Support</h3>
            <button
              className="bg-transparent border-none text-white text-xl cursor-pointer"
              onClick={toggleChat}
            >
              <ImCross />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.sender === "user"
                      ? "bg-blue-50 text-gray-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex space-x-2 justify-start items-start bg-black h-4 dark:invert ml-2">
                <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={sendMessage}
              className="ml-2 w-10 h-10 bg-green-500 text-white rounded-full flex justify-center items-center cursor-pointer"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
