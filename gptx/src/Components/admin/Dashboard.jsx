import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Sidebar */}
      <div className="w-60 bg-black border-r border-gray-800">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white">GPTX</h1>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center px-6 py-3 bg-purple-600 text-white">
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:text-white">
            <span>Overview</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:text-white">
            <span>Courses</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-400 hover:text-white">
            <span>University</span>
          </a>
        </nav>
        
        {/* Space for illustration */}
        <div className="mt-auto p-6 h-64 flex items-end">
          {/* Illustration placeholder */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl text-white">Dashboard</h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Total Students */}
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white">👥</span>
            </div>
            <p className="text-gray-400">Total Students</p>
            <h3 className="text-2xl font-bold text-white">1220</h3>
          </div>

          {/* Total Courses */}
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-cyan-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white">📚</span>
            </div>
            <p className="text-gray-400">Total Courses</p>
            <h3 className="text-2xl font-bold text-white">15</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Statistics Section */}
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white">Statistics</h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">sort by:</span>
                <button className="px-3 py-1 bg-purple-600 rounded-full text-white text-sm">
                  Weekly
                </button>
              </div>
            </div>
            
            <div className="h-48 flex items-end space-x-4">
              {[200, 300, 400, 300, 200].map((height, index) => (
                <div key={index} className="flex-1">
                  <div 
                    style={{ height: `${height/4}px` }}
                    className={`w-full ${index === 2 ? 'bg-purple-600' : 'bg-gray-600'} rounded-t`}
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4 text-gray-400 text-sm">
              <span>2020</span>
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
            </div>
          </div>

          {/* Course Activities */}
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-white mb-6">Course Activities</h3>
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-blue-500 mx-auto flex items-center justify-center">
                <span className="text-white text-2xl">54%</span>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-gray-400">Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-gray-400">In process</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <span className="text-gray-400">Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* University List */}
        <div className="mt-8">
          <h3 className="text-white mb-4">University</h3>
          <div className="space-y-4">
            {[
              'S V G Centre Of Excellence',
              'St. Lawrence International',
              'Kendriya Vidyalaya',
              'John Mathew Kayne',
              'Teresian School'
            ].map((university, index) => (
              <div key={index} className="p-4 border-b border-gray-800">
                {university}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-72 bg-black p-6 border-l border-gray-800">
        {/* User Profile */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <img src="/api/placeholder/32/32" alt="Jara Khan" className="w-8 h-8 rounded-full" />
            <span className="text-white">Jara Khan</span>
          </div>
          <div className="text-red-500">•</div>
        </div>

        {/* Calendar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button className="text-gray-400">
              <span>←</span>
            </button>
            <h3 className="text-white">January 2022</h3>
            <button className="text-gray-400">
              <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array(7).fill('Sat').map((day, i) => (
              <div key={i} className="text-gray-400 text-xs text-center py-1">
                {day}
              </div>
            ))}
            
            {Array.from({ length: 28 }, (_, i) => (
              <div 
                key={i}
                className={`text-center py-1 text-sm
                  ${i + 1 === 13 ? 'bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto' : 'text-gray-300'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Notice Board */}
        <div>
          <h3 className="text-white font-medium mb-4">Notice Board</h3>
          <div className="space-y-4">
            {[
              { icon: '📋', text: 'Exam Information' },
              { icon: '👥', text: 'Exam Week Information' },
              { icon: '❄️', text: 'Winter Break Announcement' }
            ].map((notice, index) => (
              <div key={index} className="bg-white bg-opacity-5 shadow-lg rounded-lg p-4 cursor-pointer hover:bg-opacity-10 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">{notice.icon}</span>
                  <span className="text-gray-300">{notice.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;