import ChatTab from "./views/ChatTab";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center pt-10">
        Bienvenue sur mon portfolio
      </h1>
      {/* Chat Tab */}
      <ChatTab />
    </div>
  );
}

export default App;
