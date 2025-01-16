import { useRef } from "react";
import MessagesDisplay from "./MessagesDisplay";
import ChatInput from "./ChatInput";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useChatStore } from "@/store/chatStore";
import { ChatMessage } from "@/models/ChatMessage";

const ChatWidget = ({
  messages,
  sendMessage,
  isLoading,
}: {
  messages: ChatMessage[];
  sendMessage: (content: string) => Promise<void>;
  isLoading: boolean;
}) => {
  const isOpen = useChatStore((state) => state.isOpen);
  const toggleOpen = useChatStore((state) => state.toggleOpen);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(chatRef, () => {
    if (isOpen) toggleOpen();
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
      <MessagesDisplay messages={messages} isLoading={isLoading} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatWidget;
