import { Button } from "@/components/ui/button";
import ChatWidget from "./ChatWidget";
import { useChatStore } from "@/store/chatStore";
import { useEffect } from "react";
import { IChatBotConfig } from "@/types/gobal";

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

      {isOpen && <ChatWidget />}
    </div>
  );
};

export default ChatTab;
