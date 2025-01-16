import { useChatStore } from "@/store/chatStore";
import OpenAI from "openai";

export async function getBotResponse(prompt: string): Promise<string> {
  const { config } = useChatStore.getState();
  const { apiKey, botContent, model, max_tokens, temperature } = config;

  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  try {
    const response = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: "system",
          content: botContent,
        },
        { role: "user", content: prompt },
      ],
      max_tokens,
      temperature,
    });

    return (
      response.choices[0]?.message?.content ||
      "I couldn't understand your question."
    );
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return "An error occurred. Please try again.";
  }
}
