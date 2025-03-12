import React, { useState } from "react";

import Header from "./Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ChatInterface from "./components/ChatInterface";
import { Book, BrainCircuit, Calculator } from "lucide-react";

const App = () => {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotSelect = (bot) => {
    setSelectedBot(bot);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex max-sm:flex-col overflow-hidden">
        <Sidebar onBotSelect={handleBotSelect} />
        <div className="flex-grow overflow-y-auto">
          {selectedBot ? <ChatInterface selectedBot={selectedBot} /> : <Hero />}
        </div>
      </main>
    </div>
  );
};

export default App;
