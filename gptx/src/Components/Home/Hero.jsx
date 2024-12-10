import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-black pt-20 px-6 text-center">
      <h1 className="text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 text-transparent bg-clip-text">
          Empower Your Learning With
        </span>
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
          AI Assistance
        </span>
      </h1>
      
      <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
        "Unlock limitless learning potential with AI-powered guidance at your fingertips."
      </p>
      
      <button className="px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity">
        GET STARTED
      </button>
      
      <div className="mt-24">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-blue-500">Features</span>
        </h2>
        
        <p className="text-gray-300 max-w-4xl mx-auto mb-16">
          The ultimate student platform! Powered by AI, we simplify event registrations, 
          streamline academic resources, and enhance your college experience. Whether it's 
          hackathons, workshops or networking opportunities, our website is here to connect, 
          inform, and empower students worldwide.
        </p>
        
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="Assessment and Evaluation"
            description="Our platform offers robust Assessment and Evaluation tools to help students track their AI learning journey. From quizzes and coding challenges to project reviews and performance analytics, we ensure personalized feedback to identify strengths, address gaps, and foster continuous growth in AI skills."
            gradient="from-pink-500 to-purple-500"
          />
          <FeatureCard
            title="Research and Exploration"
            description="Our platform encourages Research and Exploration by providing access to cutting-edge AI tools, datasets, and scholarly resources. Students can explore real-world applications, experiment with innovative ideas, and stay updated on the latest advancements in AI technology."
            gradient="from-purple-500 to-blue-500"
          />
          <FeatureCard
            title="Collaboration and Interaction"
            description="Our platform delivers tailored Learning and Instruction through interactive tutorials, hands-on projects, and expert-guided sessions. With step-by-step guidance and practical examples, we ensure students gain a deep understanding of AI concepts and applications, empowering them to learn effectively and confidently."
            gradient="from-blue-500 to-cyan-400"
          />
          <FeatureCard
            title="Learning and Instruction"
            description="Our platform delivers tailored Learning and Instruction through interactive tutorials, hands-on projects, and expert-guided sessions. With step-by-step guidance and practical examples, we ensure students gain a deep understanding of AI concepts and applications, empowering them to learn effectively and confidently."
            gradient="from-cyan-400 to-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, gradient }) => {
  return (
    <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default Hero;