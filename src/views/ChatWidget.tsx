import { useState } from "react";
import { useChatViewModel } from "../viewmodels/ChatViewModel";

const ChatWidget = () => {
  const { messages, sendMessage, isLoading } = useChatViewModel();
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue(""); // Clear input field
  };

  return (
    <div className="chat-widget bg-gray-100 p-4 rounded-md shadow-md w-80">
      {/* Messages display */}
      <div className="chat-messages overflow-y-auto h-60 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender} p-2 my-1 ${
              msg.sender === "user"
                ? "text-right text-blue-600"
                : "text-left text-green-600"
            }`}
          >
            <p>{msg.content}</p>
          </div>
        ))}
        {isLoading && <p className="text-gray-500">...</p>}
      </div>

      {/* Input field */}
      <div className="chat-input flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-md p-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tapez votre message"
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
