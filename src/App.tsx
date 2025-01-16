import ChatTab from "./views/ChatTab";

function App() {
  const chatbotConfig = {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    botContent: `Je suis un chatbot, configurez-moi :)`,
    messagesLimitReachContent: "Vous avez atteint la limite de messages.",
    errorMessageContent: "Une erreur est survenue.",
  };

  return (
    <div className="min-h-screen">
      <ChatTab config={chatbotConfig} />
    </div>
  );
}

export default App;
