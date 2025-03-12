import React, { useState } from "react";
import { Upload, Send } from "lucide-react";

export default function ChatInterface({ selectedBot }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "" && !uploadedFile) return;

    // Add user message
    const newUserMessage = {
      sender: "user",
      content: inputMessage,
      file: uploadedFile,
      timestamp: new Date(),
    };

    // Add bot response
    const botResponse = {
      sender: "bot",
      content: `هذا مجرد رد تجريبي من البوت. ${selectedBot.name} الذي ${selectedBot.description}`,
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage, botResponse]);
    setInputMessage("");
    setUploadedFile(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setUploadedFile(file);
    } else {
      alert("الرجاء رفع ملف PDF");
    }
  };

  const isPdfBot =
    selectedBot.id === "planner" || selectedBot.id === "question-bank";

  return (
    <div className="flex flex-col h-full" dir="rtl">
      {/* Chat header */}
      <div className="border-b border-gray-200 p-4 flex items-center">
        <div className="bg-white p-2 rounded-full border">
          {selectedBot.icon}
        </div>
        <div className="mr-3">
          <h2 className="font-semibold">{selectedBot.name}</h2>
          <p className="text-sm text-gray-600">{selectedBot.type}</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {/* Welcome message */}
        <div className="bg-gray-100 rounded-lg p-4 max-w-3xl mx-auto text-right">
          <h3 className="font-medium text-lg mb-2">
            مرحباً بك في {selectedBot.name}
          </h3>
          <p>{selectedBot.description}</p>
          {isPdfBot && (
            <p className="mt-2 text-sm text-gray-600">
              لبدء المحادثة، يرجى رفع ملف PDF للتحليل
            </p>
          )}
        </div>

        {/* Message bubbles */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user"
                ? "bg-blue-50 mr-auto"
                : "bg-white ml-auto"
            } rounded-lg p-4 max-w-3xl shadow-sm border text-right`}
          >
            {message.file && (
              <div className="bg-gray-100 p-2 rounded mb-2 text-sm">
                الملف المرفق: {message.file.name}
              </div>
            )}
            <p>{message.content}</p>
            <p className="text-xs text-gray-500 mt-1">
              {message.timestamp.toLocaleTimeString()}
            </p>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 p-4">
        {uploadedFile && (
          <div className="bg-blue-50 p-2 rounded mb-2 flex justify-between items-center">
            <button
              className="text-red-500 text-sm"
              onClick={() => setUploadedFile(null)}
            >
              إلغاء
            </button>
            <span className="text-sm">{uploadedFile.name}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <Send className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`اكتب رسالتك إلى ${selectedBot.name}...`}
            className="flex-grow border border-gray-300 rounded-full py-2 px-4 text-right"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          {isPdfBot && (
            <>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="pdf-upload"
              />
              <label
                htmlFor="pdf-upload"
                className="bg-gray-100 p-2 rounded-full cursor-pointer hover:bg-gray-200"
              >
                <Upload className="w-5 h-5 text-gray-600" />
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
