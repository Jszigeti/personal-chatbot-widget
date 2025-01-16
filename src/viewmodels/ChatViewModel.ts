/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ChatMessage } from "../models/ChatMessage";
import { getBotResponse } from "../models/OpenAIService";
import { v4 as uuid } from "uuid";
import { useChatStore } from "@/store/chatStore";

export function useChatViewModel() {
  const { config } = useChatStore.getState();
  const { errorMessageContent, messagesLimitReachContent, maxMessages } =
    config;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messageCount, setMessageCount] = useState(0);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Limit maximum messages per session
    if (messageCount >= maxMessages) {
      setMessages((prev) => [
        ...prev,
        {
          id: uuid(),
          sender: "bot",
          content: messagesLimitReachContent,
          timestamp: new Date(),
        },
      ]);
      return;
    }

    setMessageCount((prev) => prev + 1);

    // Add the user's message to the conversation
    const userMessage: ChatMessage = {
      id: uuid(),
      sender: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Call OpenAI API to get bot's response
    setIsLoading(true);
    try {
      const botContent = await getBotResponse(content);
      const botMessage: ChatMessage = {
        id: uuid(),
        sender: "bot",
        content: botContent,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error: unknown) {
      const errorMessage: ChatMessage = {
        id: uuid(),
        sender: "bot",
        content: errorMessageContent,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
}
