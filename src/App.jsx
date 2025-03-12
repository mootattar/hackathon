// import React from "react";

// import Header from "./Header";
// import Sidebar from "./components/Sidebar";
// import Hero from "./components/Hero";

// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <Header />
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <Hero />
//         <Sidebar />
//       </main>
//     </div>
//   );
// };

// export default App;

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
          {selectedBot ? (
            <ChatInterface selectedBot={selectedBot} />
          ) : (
            <div className="container mx-auto px-4 py-8">
              <Hero />
              <section className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-right">
                  الميزات الرئيسية
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-end">
                      <div className="bg-indigo-100 p-3 rounded-full">
                        <Book className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-right">
                      تحليل ملفات PDF
                    </h4>
                    <p className="text-gray-600 text-right">
                      حول مستنداتك إلى مواد تعليمية منظمة وبنوك أسئلة.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-end">
                      <div className="bg-indigo-100 p-3 rounded-full">
                        <BrainCircuit className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-right">
                      خبرة في المواد الدراسية
                    </h4>
                    <p className="text-gray-600 text-right">
                      احصل على مساعدة متخصصة في الكيمياء والرياضيات والفيزياء من
                      خلال المساعدين المخصصين.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-end">
                      <div className="bg-indigo-100 p-3 rounded-full">
                        <Calculator className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-right">
                      التعلم التفاعلي
                    </h4>
                    <p className="text-gray-600 text-right">
                      تفاعل مع المساعدين لحل المشكلات وتعزيز فهمك.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
