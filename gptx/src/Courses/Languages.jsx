import React from 'react';
import { Mic } from 'lucide-react';

const Languages = () => {
  const topics = [
    { name: "All", light: true },
    { name: "English", light: true },
    { name: "Spanish", light: true },
    { name: "French", light: true },
    { name: "German", light: true },
    { name: "Grammar & Vocabulary", dark: true },
    { name: "Business Communication", dark: true },
    { name: "Academic Writing", dark: true },
    { name: "Conversational", light: true },
    { name: "Advanced Linguistics", dark: true }
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Navigation */}
      <div className="mb-8">
        <p className="text-gray-300 mb-4">Courses&gt;Languages</p>
        <div className="flex flex-wrap gap-3">
          {topics.map((topic, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${
                topic.light 
                  ? 'bg-gray-300 text-black hover:bg-gray-400'
                  : 'bg-black text-white border border-gray-700 hover:border-gray-500'
              } transition-colors`}
            >
              {topic.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-purple-500">
          Language Helper
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Get easy-to-follow guidance for all your language learning needs. StudyX.AI helps you
          master languages step-by-step, with pronunciation, grammar, and conversation practice to build your confidence.
        </p>

        {/* Input Area */}
        <div className="border-2 border-dashed border-purple-500 rounded-lg p-6 relative">
          <textarea 
            className="w-full h-32 bg-transparent text-white placeholder-gray-500 resize-none focus:outline-none"
            placeholder="ASK ANYTHING"
          />
          <div className="absolute bottom-4 left-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Mic className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;