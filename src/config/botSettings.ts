/**
 * System to configure the chatbot's settings.
 */

// AI model
export const model = "gpt-3.5-turbo";

// Max tokens per response
export const max_tokens = 150;

// Creativity level
export const temperature = 0.7;

// Session limits
export const sessionLimits = {
  maxMessages: 10, // Maximum messages per session
};
