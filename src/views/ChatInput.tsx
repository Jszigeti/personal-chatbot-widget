import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatStore } from "@/store/chatStore";
import { IChatInputProps } from "@/types/gobal";

const ChatInput = ({ sendMessage }: IChatInputProps) => {
  const inputValue = useChatStore((state) => state.inputValue);
  const setInputValue = useChatStore((state) => state.setInputValue);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSend}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your message..."
        className="bg-background"
      />
      <Button
        type="submit"
        className="bg-muted-foreground text-background px-4 py-2 hover:bg-primary"
      >
        Send
      </Button>
    </form>
  );
};

export default ChatInput;
