# Personal Chatbot Widget for Portfolio

This project is a customizable chatbot widget designed to be integrated into a developer portfolio. The chatbot simulates a conversation with the developer, providing information about their skills, projects, and experiences, while also redirecting users to a contact form for more direct inquiries.

---

## Features

- **Expandable Widget**: A chat tab that expands from the bottom of the page.
- **Personalized Content**: The bot responds in the first person, representing the developer.
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
   git clone https://github.com/Jszig/personal-chatbot-widget.git
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

### Bot Settings

All chatbot settings are centralized in the `src/config/botSettings.ts` file. Key configurable options include:

- **Model**: Set the OpenAI model to use (e.g., `gpt-3.5-turbo`).
- **Max Tokens**: Limit the number of tokens per response.
- **Temperature**: Control the creativity of responses.

### Bot Content

The bot's behavior and personality are defined in `src/config/botContent.ts`. You can customize:

- Introduction and description of the developer.
- Rules for chatbot interactions.
- Messages for session limits and errors.

---

## Usage

- The chatbot widget appears as a tab at the bottom-right corner of the page.
- Clicking the tab expands or collapses the chatbot interface.
- Users can interact with the chatbot to learn more about the developer.
- The chatbot enforces session limits and redirects users to the contact form for specific inquiries.

---

## Deployment

To build the project for production:

```bash
npm run build
```

Serve the `dist` folder on any static hosting platform (e.g., Netlify, Vercel, or your own server).

---

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

If you have questions or need assistance, feel free to use the contact form on the portfolio site or raise an issue in this repository.
