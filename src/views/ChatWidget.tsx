import { Button } from "@/components/ui/button";
import { useChatViewModel } from "@/viewmodels/ChatViewModel";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

const ChatWidget = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { messages, sendMessage, isLoading } = useChatViewModel();
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue(""); // Clear input field
  };

  return (
    <div className="bg-muted p-4 rounded-md shadow-md w-96 relative">
      {/* Messages display */}
      <span
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconX stroke={3} />
        <span className="sr-only">Closing icon</span>
      </span>
      <div className="overflow-y-auto h-72 mb-4">
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
        {isLoading && <p className="text-muted-foreground">...</p>}
      </div>

      {/* Input field */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-md p-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tapez votre message"
        />
        <Button
          onClick={handleSend}
          className="bg-muted-foreground text-white px-4 py-2 hover:bg-primary"
        >
          Envoyer
        </Button>
      </div>
    </div>
  );
};

export default ChatWidget;
