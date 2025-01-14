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
  return (
    <>
      <span
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconX stroke={3} />
        <span className="sr-only">Closing icon</span>
      </span>
      <div className="overflow-y-auto h-72 mb-6">
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
    </>
  );
};

export default MessagesDisplay;
