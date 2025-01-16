import { Button } from "@/components/ui/button";
import ChatWidget from "./ChatWidget";
import { useChatStore } from "@/store/chatStore";
import { useEffect } from "react";
import { IChatBotConfig } from "@/types/gobal";
import { useChatViewModel } from "@/viewmodels/ChatViewModel";

const defaultConfig = {
  model: "gpt-3.5-turbo",
  max_tokens: 150,
  temperature: 0.7,
  maxMessages: 10,
};

const ChatTab = ({ config }: IChatBotConfig) => {
  const setConfig = useChatStore((state) => state.setConfig);
  const isOpen = useChatStore((state) => state.isOpen);
  const toggleOpen = useChatStore((state) => state.toggleOpen);
  const { messages, sendMessage, isLoading } = useChatViewModel();

  useEffect(() => {
    const finalConfig = { ...defaultConfig, ...config };
    console.log("Configuration finale appliquée :", finalConfig);
    setConfig(finalConfig);
  }, [config, setConfig]);

  return (
    <div className="fixed bottom-2 right-10 z-50 flex flex-col items-end">
      <Button
        className={`bg-primary text-background px-4 py-2 ${
          isOpen ? "hidden" : ""
        }`}
        onClick={toggleOpen}
      >
        {isOpen ? "Fermer" : "Ouvrir le chat"}
      </Button>

      <ChatWidget
        messages={messages}
        sendMessage={sendMessage}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ChatTab;
