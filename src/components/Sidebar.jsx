import React, { useState } from "react";
import {
  Book,
  BrainCircuit,
  Beaker,
  Calculator,
  Atom,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar({ onBotSelect }) {
  const [selectedBot, setSelectedBot] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bots = [
    {
      id: "planner",
      name: "DocumentMind",
      type: "تحليل PDF",
      description: "يحلل ملفات PDF لإنشاء خطط دراسية ومسارات تعليمية منظمة.",
      icon: <Book className="w-6 h-6 text-blue-600 md:w-5 md:h-5" />,
      color: "bg-blue-100 hover:bg-blue-200",
      textColor: "text-blue-800",
    },
    {
      id: "question-bank",
      name: "QuizGenius",
      type: "تحليل PDF",
      description: "يستخرج ويولد أسئلة من مستندات PDF لاختبار الفهم.",
      icon: <BrainCircuit className="w-6 h-6 text-purple-600 md:w-5 md:h-5" />,
      color: "bg-purple-100 hover:bg-purple-200",
      textColor: "text-purple-800",
    },
    {
      id: "chemistry",
      name: "ChemCrafter",
      type: "كيمياء",
      description:
        "يوفر تفسيرات للمفاهيم الكيميائية والتفاعلات والهياكل الجزيئية.",
      icon: <Beaker className="w-6 h-6 text-green-600 md:w-5 md:h-5" />,
      color: "bg-green-100 hover:bg-green-200",
      textColor: "text-green-800",
    },
    {
      id: "mathematics",
      name: "MathMaster",
      type: "رياضيات",
      description:
        "يحل ويشرح المسائل الرياضية من الحساب الأساسي إلى التفاضل والتكامل المتقدم.",
      icon: <Calculator className="w-6 h-6 text-red-600 md:w-5 md:h-5" />,
      color: "bg-red-100 hover:bg-red-200",
      textColor: "text-red-800",
    },
    {
      id: "physics",
      name: "PhysicsForge",
      type: "فيزياء",
      description:
        "يشرح مفاهيم الفيزياء، يحل المسائل، ويصور الظواهر الفيزيائية.",
      icon: <Atom className="w-6 h-6 text-amber-600 md:w-5 md:h-5" />,
      color: "bg-amber-100 hover:bg-amber-200",
      textColor: "text-amber-800",
    },
  ];

  const handleBotSelect = (bot) => {
    setSelectedBot(bot);
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
    onBotSelect(bot);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Mobile sidebar design
  const MobileSidebar = () => (
    <div
      className={`${
        isMenuOpen ? "h-screen" : "h-1/4"
      } border-r border-gray-200 bg-white w-full flex flex-col relative md:hidden`}
    >
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <div className="flex gap-4">
            {selectedBot && (
              <div className="bg-white border p-1 sm:p-2 rounded-full">
                {selectedBot && selectedBot.icon}
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-800 text-right">
              {selectedBot ? selectedBot.name : "المساعدين المتخصصين"}
            </h3>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`${isMenuOpen ? "block" : "hidden"}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {bots.map((bot) => (
                <div
                  key={bot.id}
                  className={`${bot.color} ${
                    selectedBot?.id === bot.id ? "ring-2 ring-blue-500" : ""
                  } border rounded-lg p-2 sm:p-3 cursor-pointer transition-all hover:shadow-md`}
                  onClick={() => handleBotSelect(bot)}
                >
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-full border">
                      {bot.icon}
                    </div>
                    <div className="mr-2 sm:mr-3 text-right">
                      <h4 className="font-medium text-xs sm:text-sm">
                        {bot.name}
                      </h4>
                      <p className="text-xs text-gray-600 hidden sm:block">
                        {bot.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Desktop sidebar design
  const DesktopSidebar = () => (
    <div className="h-full overflow-y-auto border-r border-gray-200 bg-white w-64 flex-shrink-0 hidden md:block">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          المساعدين المتخصصين
        </h3>
        <div className="space-y-2">
          {bots.map((bot) => (
            <div
              key={bot.id}
              className={`${bot.color} ${
                selectedBot?.id === bot.id ? "ring-2 ring-blue-500" : ""
              } border rounded-lg p-3 cursor-pointer transition-all`}
              onClick={() => handleBotSelect(bot)}
            >
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full">{bot.icon}</div>
                <div className="mr-3 text-right">
                  <h4 className="font-medium text-sm">{bot.name}</h4>
                  <p className="text-xs text-gray-600">{bot.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <MobileSidebar />
      <DesktopSidebar />
    </>
  );
}
