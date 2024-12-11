import React, { useState } from 'react';
import { User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia",
      avatarColor: "from-pink-400 to-rose-400",
      text: "The AI recommendations are spot on! It's helped me stay organized and study smarter"
    },
    {
      name: "Aarav",
      avatarColor: "from-blue-400 to-cyan-400",
      text: "The quizzes and progress tracking are a game changer"
    },
    {
      name: "Riya",
      avatarColor: "from-purple-400 to-fuchsia-400",
      text: "Event registrations and team collaborations are so easy now"
    }
  ];

  const faqs = [
    {
      question: "Why should I use GPTX?",
      answer: "GPTX provides personalized AI-powered learning assistance, making study sessions more effective and efficient."
    },
    {
      question: "What type of courses is GPTX best for?",
      answer: "GPTX supports all academic subjects and skill levels, from basic concepts to advanced topics."
    },
    {
      question: "Is GPTX free?",
      answer: "GPTX offers both free and premium features to support your learning journey."
    },
    {
      question: "Do you need university verification to join here?",
      answer: "No, GPTX is open to all learners, whether you're a university student or self-learner."
    },
    {
      question: "How accurate is GPTX?",
      answer: "GPTX uses advanced AI models and is regularly updated to ensure high accuracy in responses."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text">
            Hear what our students have to say about their journey with us!"
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${testimonial.avatarColor} flex items-center justify-center`}>
                <User className="text-white w-8 h-8" />
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <p className="text-white font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-6xl font-bold mb-16">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              THE.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              FAQ?
            </span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-black"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-xl">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-gray-50 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;