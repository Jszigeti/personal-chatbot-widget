import { useState } from "react";
import ChatWidget from "./ChatWidget";

const ChatTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-2 right-10 z-50 flex flex-col items-end">
      {/* Tab Header */}
      <div
        className={`bg-blue-600 text-white px-4 py-2 rounded-t-lg cursor-pointer ${
          isOpen ? "" : "rounded-b-lg"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Fermer" : "Ouvrir le chat"}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white shadow-lg w-80 h-96 rounded-t-lg overflow-hidden flex flex-col transition-opacity duration-300 opacity-100">
          <ChatWidget />
        </div>
      )}
    </div>
  );
};

export default ChatTab;
