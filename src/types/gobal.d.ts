export interface IChatConfig {
  apiKey: string;
  botContent: string;
  messagesLimitReachContent: string;
  errorMessageContent: string;
  model: string;
  max_tokens: number;
  temperature: number;
  maxMessages: number;
}

export interface ChatStoreState {
  config: IChatConfig;
  inputValue: string;
  isOpen: boolean;
  setConfig: (config: IChatConfig) => void;
  setInputValue: (inputValue: string) => void;
  toggleOpen: () => void;
}

export interface IChatBotConfig {
  config: {
    apiKey: string;
    botContent: string;
    messagesLimitReachContent: string;
    errorMessageContent: string;
    model?: string;
    max_tokens?: number;
    temperature?: number;
    maxMessages?: number;
  };
}

export interface IChatInputProps {
  sendMessage: (content: string) => Promise<void>;
}

interface IMessageDisplayProps {
  messages: ChatMessage[];
  isLoading: boolean;
}
