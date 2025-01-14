import { useState } from "react";
import MessagesDisplay from "./MessagesDisplay";
import ChatInput from "./ChatInput";
import { ChatMessage } from "@/models/ChatMessage";

interface IChatWidgetProps {
  messages: ChatMessage[];
  onSendMessage: (content: string) => Promise<void>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

const ChatWidget = ({
  messages,
  onSendMessage,
  isOpen,
  setIsOpen,
  isLoading,
}: IChatWidgetProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="bg-muted p-4 pt-6 rounded-md shadow-md w-96 relative">
      <MessagesDisplay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        messages={messages}
        isLoading={isLoading}
      />
      <ChatInput
        onSendMessage={onSendMessage}
        inputValue={inputValue}
        handleInputValue={setInputValue}
      />
    </div>
  );
};

export default ChatWidget;
