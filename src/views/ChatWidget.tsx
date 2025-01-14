import { useRef, useState } from "react";
import MessagesDisplay from "./MessagesDisplay";
import ChatInput from "./ChatInput";
import { ChatMessage } from "@/models/ChatMessage";
import { useOutsideClick } from "@/hooks/useOutsideClick";

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
  const chatRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(chatRef, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <div
      ref={chatRef}
      className={`fixed bottom-0 right-4 bg-muted p-4 pt-6 rounded-t-lg shadow-md w-96 transition-transform duration-300 ease-in-out ${
        isOpen
          ? "translate-y-0 pointer-events-auto"
          : "translate-y-full pointer-events-none"
      }`}
    >
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
