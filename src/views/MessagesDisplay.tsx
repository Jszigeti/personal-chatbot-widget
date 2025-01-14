import React, { useEffect, useRef } from "react";
import { ChatMessage } from "@/models/ChatMessage";
import { IconX } from "@tabler/icons-react";

interface IMessageDisplayProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  messages: ChatMessage[];
  isLoading: boolean;
}

const MessagesDisplay = ({
  isOpen,
  setIsOpen,
  messages,
  isLoading,
}: IMessageDisplayProps) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <span
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconX stroke={3} />
        <span className="sr-only">Closing icon</span>
      </span>
      <div className="overflow-y-auto h-72 mb-6 mt-6 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`border rounded-xl text-white w-fit max-w-64 p-2 my-1 ${
              msg.sender === "user"
                ? "bg-blue-500 place-self-end"
                : "bg-green-500 place-self-start"
            }`}
          >
            <p>{msg.content}</p>
          </div>
        ))}
        {isLoading && (
          <p className="text-muted-foreground place-self-start">...</p>
        )}
        <div ref={messagesEndRef}></div>
      </div>
    </>
  );
};

export default MessagesDisplay;
