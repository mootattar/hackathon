import { BrainCircuit, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="w-8 h-8 text-indigo-600" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            EduBot Central
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            الرئيسية
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            حولنا
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            طريقة العمل
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            تواصل معنا{" "}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <nav className="flex flex-col space-y-2 pb-3">
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              الرئيسية
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              حولنا{" "}
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              طريقة العمل{" "}
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium py-2"
            >
              تواصل معنا{" "}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
