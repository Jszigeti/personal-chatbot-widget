import { useState } from "react";
import { Button } from "@/components/ui/button";
import ChatWidget from "./ChatWidget";

const ChatTab = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-2 right-10 z-50 flex flex-col items-end">
      {/* Tab Header */}
      <Button
        className={`bg-primary text-white px-4 py-2 ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Fermer" : "Ouvrir le chat"}
      </Button>
      {/* Chat Window */}
      {isOpen && <ChatWidget isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ChatTab;
