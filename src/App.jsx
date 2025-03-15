import React from "react";

import Header from "./components/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BotRouter from "./components/BotRoutes";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import ContactUs from "./pages/ContactUs";

const App = () => {
  // ﻻتضيف صفحة بوت الامتحانات وبوت الجدول هون ! انت فقط روح على BotRouter , BotComponents وشوف شو ﻻزم تعمل
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen bg-gray-50">
        <Header />
        <main className="flex-grow flex max-sm:flex-col overflow-hidden">
          <Sidebar />
          <div className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bot/:botId" element={<BotRouter />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
