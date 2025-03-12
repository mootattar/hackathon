import React from "react";
import { BookOpen, Star, Users } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">المساعد الأكاديمي الذكي</h1>
        <p className="text-xl mb-6">
          استخدم الذكاء الاصطناعي لتحسين دراستك وفهم المواد العلمية بشكل أفضل
        </p>
        <div className="flex justify-center space-x-8 mb-6">
          <div className="flex flex-col items-center">
            <BookOpen className="w-8 h-8 mb-2" />
            <span>تحليل المستندات</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-8 h-8 mb-2" />
            <span>مساعدة متخصصة</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 mb-2" />
            <span>التعلم المخصص</span>
          </div>
        </div>
        <p className="text-blue-100 text-sm">
          اختر أحد المساعدين من القائمة الجانبية للبدء
        </p>
      </div>
    </div>
  );
}
