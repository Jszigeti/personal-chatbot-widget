import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface IChatInputProps {
  onSendMessage: (content: string) => Promise<void>;
  inputValue: string;
  handleInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const ChatInput = ({
  onSendMessage,
  inputValue,
  handleInputValue,
}: IChatInputProps) => {
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSendMessage(inputValue);
    handleInputValue("");
  };

  return (
    <form
      onSubmit={handleSend}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputValue(e.target.value)}
        placeholder="Tapez votre message"
        className="bg-white"
      />
      <Button
        type="submit"
        className="bg-muted-foreground text-white px-4 py-2 hover:bg-primary"
      >
        Envoyer
      </Button>
    </form>
  );
};

export default ChatInput;
