import React from 'react';

const Features = () => {
  const steps = [
    {
      number: "1",
      title: "Ask Your Question",
      description: "Simply type, copy-paste, study tips, or just general questions. We're here to help you. It's quick and easy!",
      icon: (
        <div className="w-32 h-32">
          <img src="/api/placeholder/128/128" alt="Ask question illustration" className="w-full h-full" />
        </div>
      )
    },
    {
      number: "2",
      title: "Get Step-by-Step Answers",
      description: "We provide instant, detailed answers and explanations, and find similar resources from millions of our community questions for you.",
      icon: (
        <div className="w-32 h-32">
          <img src="/api/placeholder/128/128" alt="Step by step answers illustration" className="w-full h-full" />
        </div>
      )
    },
    {
      number: "3",
      title: "Chat with AI tutor",
      description: "Let us know if the answer needs improvement, and we'll fix it. You can also chat with our AI tutor for deeper understanding and better grades.",
      icon: (
        <div className="w-32 h-32">
          <img src="/api/placeholder/128/128" alt="AI tutor illustration" className="w-full h-full" />
        </div>
      )
    }
  ];

  const subjects = [
    { name: "Mathematics", icon: "📊" },
    { name: "Languages", icon: "📚" },
    { name: "Commerce", icon: "💼" },
    { name: "Chemistry", icon: "🧪" },
    { name: "Biology", icon: "🧬" },
    { name: "Physics", icon: "🔋" },
    { name: "Computer science", icon: "💻" },
    { name: "Psychology", icon: "🧠" }
  ];

  return (
    <div className="px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          "Elevate Your Learning Experience with the Power of AI Assistance"
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {step.icon}
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Subject Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            "Get Expert Help with Any Subject, Any Question!"
          </h2>
          <p className="text-gray-400">
            we cover all subjects to ensure you get the help you need, no matter what you're studying
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 text-center hover:bg-gray-800 transition-colors">
              <div className="text-4xl mb-3">{subject.icon}</div>
              <div className="text-white font-medium">{subject.name}</div>
            </div>
          ))}
        </div>

        {/* Ask Question Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
            Ask your question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;