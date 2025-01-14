import { useState } from "react";
import { Button } from "@/components/ui/button";
import ChatWidget from "./ChatWidget";
import { useChatViewModel } from "@/viewmodels/ChatViewModel";

const ChatTab = () => {
  const { messages, sendMessage, isLoading } = useChatViewModel();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-2 right-10 z-50 flex flex-col items-end">
      <Button
        className={`bg-primary text-white px-4 py-2 ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Fermer" : "Ouvrir le chat"}
      </Button>
      {isOpen && (
        <ChatWidget
          messages={messages}
          onSendMessage={sendMessage}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default ChatTab;
