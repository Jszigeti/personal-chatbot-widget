import { botContent } from "@/config/botContent";
import { max_tokens, model, temperature } from "@/config/botSettings";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Your OpenAI API key
  dangerouslyAllowBrowser: true,
});

/**
 * Fetch a response from the OpenAI chatbot.
 * @param prompt User's message or prompt.
 * @returns The chatbot's response.
 */
export async function getBotResponse(prompt: string): Promise<string> {
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
