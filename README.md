# Customizable Chatbot Widget

This project is a fully customizable chatbot widget designed to be integrated into any website. The chatbot simulates a conversation based on the provided configuration, offering flexibility for a wide range of use cases such as customer support, FAQs, or personalized user interactions.

---

## Current Status

🚧 **Under Development**: This widget is still in development and is provided "as-is." It exposes the OpenAI API key directly in the frontend, which poses a security risk. Please use it with caution and be aware of the potential for API key abuse.

---

## Features

- **Expandable Widget**: A chat tab that expands from the bottom of the page.
- **Customizable Content**: The bot's responses and behavior are fully configurable.
- **OpenAI Integration**: Powered by GPT-3.5-Turbo for intelligent, context-aware responses.
- **Modular Configuration**: All bot settings and content are centralized for easy customization.
- **Session Limits**: Limits the number of messages per session and provides appropriate notifications.
- **Error Handling**: Friendly error messages for unexpected issues.

---

## Technologies Used

- **React**: Front-end library for building the user interface.
- **TypeScript**: Strongly typed programming language for safer and cleaner code.
- **Vite**: Build tool for fast and efficient development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn**: Component library for consistent and accessible UI components.
- **OpenAI API**: AI-powered backend for chatbot responses.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jszigeti/personal-chatbot-widget.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chatbot-widget
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file at the root of the project and add your OpenAI API key:

   ```plaintext
   VITE_OPENAI_API_KEY=your_openai_api_key
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

---

## Configuration

### Dynamic Configuration

You can pass a configuration object when integrating the chatbot widget to customize its behavior. Below is the structure of the configuration object:

```typescript
export interface IChatBotConfig {
  config: {
    apiKey: string; // Your OpenAI API key (required)
    botContent: string; // The personality and introductory content of the bot (required)
    messagesLimitReachContent: string; // Message displayed when the session limit is reached (required)
    errorMessageContent: string; // Message displayed in case of an error (required)
    model?: string; // OpenAI model to use (default: "gpt-3.5-turbo")
    max_tokens?: number; // Maximum tokens per response (default: 150)
    temperature?: number; // Creativity level (default: 0.7)
    maxMessages?: number; // Maximum number of messages per session (default: 10)
  };
}
```

### Example Configuration

Here is an example of how to configure the chatbot widget:

```tsx
import ChatTab from "./views/ChatTab";

function App() {
  const chatbotConfig = {
    apiKey: "your_openai_api_key",
    botContent: "Hello! I am here to assist you with your queries.",
    messagesLimitReachContent:
      "You have reached the limit of messages for this session.",
    errorMessageContent: "An error occurred. Please try again later.",
    model: "gpt-3.5-turbo",
    max_tokens: 200,
    temperature: 0.8,
    maxMessages: 15,
  };

  return (
    <div className="min-h-screen">
      <ChatTab config={chatbotConfig} />
    </div>
  );
}

export default App;
```

---

## Usage

- The chatbot widget appears as a tab at the bottom-right corner of the page.
- Clicking the tab expands or collapses the chatbot interface.
- Users can interact with the chatbot to get information or assistance based on the configured prompts.
- The chatbot enforces session limits and displays appropriate notifications when limits are reached.

---

## Deployment

To build the project for production:

```bash
npm run build
```

Serve the `dist` folder on any static hosting platform (e.g., Netlify, Vercel, or your own server).

---

## Known Issues and Future Improvements

### Known Issues

1. **Security Risk**: The OpenAI API key is exposed in the frontend, which poses a significant security risk. Use with caution.
2. **Tailwind Dependency**: The widget currently relies on Tailwind CSS, requiring the project host to use Tailwind for proper integration.

### Upcoming Features

1. **Remove Tailwind Dependency**: Transition to CSS-in-JS or native styles to make the chatbot more universally usable.
2. **Lightweight Backend**: Provide an easily deployable backend to secure the OpenAI API key and protect against abuse.
3. **Improved Customization**: Simplify configuration and provide additional hooks for user-defined behaviors.

---

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

---

## Contact

If you have questions or need assistance, feel free to raise an issue in this repository.
