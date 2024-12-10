import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-black/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-4xl font-bold text-white">
          GPTX
          <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
        </a>
        
        <div className="flex items-center space-x-8">
          <a href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </a>
          <a href="/courses" className="text-gray-300 hover:text-white transition-colors">
            Courses
          </a>
          <a href="/student" className="text-gray-300 hover:text-white transition-colors">
            Student
          </a>
          <a href="/university" className="text-gray-300 hover:text-white transition-colors">
            University
          </a>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => window.location.href = '/signup'}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              SIGN UP
            </button>
            <button 
              onClick={() => window.location.href = '/login'}
              className="text-purple-500 font-medium hover:text-purple-400 transition-colors"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;