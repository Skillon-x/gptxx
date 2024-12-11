import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
          
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-gray-300 hover:text-white transition-colors flex items-center"
            >
              Courses
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-800">
                <a href="/courses/maths" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-t-lg">
                  📊 Math
                </a>
                <a href="/courses/languages" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                  🌐 Languages
                </a>
                <a href="/courses/commerce" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                  💼 Commerce
                </a>
                <a href="/courses/chemistry" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                  🧪 Chemistry
                </a>
                <a href="/courses/biology" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                  🧬 Biology
                </a>
                <a href="/courses/physics" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                  🔋 Physics
                </a>
                <a href="/courses/computer-science" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                  💻 Computer Science
                </a>
                <a href="/courses/psychology" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors rounded-b-lg">
                  🧠 Psychology
                </a>
              </div>
            )}
          </div>
          
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