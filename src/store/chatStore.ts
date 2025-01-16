import { ChatStoreState, IChatConfig } from "@/types/gobal";
import { create } from "zustand";

export const useChatStore = create<ChatStoreState>((set) => ({
  config: {
    apiKey: "",
    botContent: "Bonjour, je suis un chatbot !",
    messagesLimitReachContent: "Vous avez atteint la limite de messages.",
    errorMessageContent: "Une erreur est survenue.",
    model: "gpt-3.5-turbo",
    max_tokens: 150,
    temperature: 0.7,
    maxMessages: 10,
  },

  inputValue: "",
  isOpen: false,

  setConfig: (config: Partial<IChatConfig>) =>
    set((state) => ({
      config: {
        ...state.config,
        ...config,
      },
    })),
  setInputValue: (inputValue) => set({ inputValue }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
