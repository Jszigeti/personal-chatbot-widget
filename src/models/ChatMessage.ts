export interface ChatMessage {
  // Unique identifier for the message
  id: string;
  // Message sender (user or bot)
  sender: "user" | "bot";
  // Message content
  content: string;
  // Date and time the message was sent
  timestamp: Date;
}
