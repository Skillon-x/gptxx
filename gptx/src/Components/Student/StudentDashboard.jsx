import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Settings, 
  Search,
  LogOut
} from 'lucide-react';

// Time Spent Chart Component
const TimeSpentChart = () => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    const activities = [
      {
        name: 'Grammar',
        color: 'bg-indigo-600',
        data: [2, 1.5, 3, 2, 1, 2, 1.5]
      },
      {
        name: 'Phrasal verbal',
        color: 'bg-blue-500',
        data: [1, 2, 1.5, 1, 2, 1, 2]
      },
      {
        name: 'Vocabulary',
        color: 'bg-pink-500',
        data: [1.5, 1, 2, 1.5, 1, 1.5, 1]
      }
    ];
  
    return (
      <div>
        <div className="relative h-64">
          <div className="flex justify-between h-48 items-end">
            {weekDays.map((day, dayIndex) => (
              <div key={day} className="flex flex-col-reverse w-6">
                {activities.map((activity) => (
                  <div
                    key={activity.name}
                    className={`w-2 ${activity.color} mx-auto mb-0.5 rounded-full`}
                    style={{
                      height: `${activity.data[dayIndex] * 20}px`
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
  
          <div className="flex justify-between mt-2">
            {weekDays.map(day => (
              <span key={day} className="text-xs text-gray-400">
                {day}
              </span>
            ))}
          </div>
        </div>
  
        <div className="flex justify-start gap-6 mt-4">
          {activities.map(activity => (
            <div key={activity.name} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${activity.color}`} />
              <span className="text-xs text-gray-400">{activity.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

const StudentDashboard = () => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <BookOpen size={20} />, label: 'Classes' },
    { icon: <FileText size={20} />, label: 'Resources' },
    { icon: <Settings size={20} />, label: 'Settings' }
  ];

  const units = [
    { name: 'Technology', progress: 35 },
    { name: 'Ecology', progress: 44 },
    { name: 'Real State', progress: 40 },
    { name: 'Education', progress: 15 },
    { name: 'Lab Market', progress: 70 }
  ];

  const courses = [
    { level: 'B2', type: 'Business English', name: 'Grammar', color: 'bg-indigo-600' },
    { level: 'B2', type: 'Common English', name: 'Phrasal verbal', color: 'bg-blue-500' },
    { level: 'B2', type: 'Business Spanish', name: 'Vocabulary', color: 'bg-pink-500' }
  ];

  const reminders = [
    { icon: '⏰', title: 'Eng - Vocabulary test', date: '24 Sep 2019, Friday' },
    { icon: '📧', title: 'Eng - Send grammer Homework', date: '25 Sep 2019, Wednesday' },
    { icon: '📧', title: 'Eng - Vocabulary test', date: '05 Oct 2019, Monday' }
  ];

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-800 p-6">
        <div className="text-2xl font-bold text-white mb-12">GPTX</div>
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="bg-gray-900 rounded-full pl-10 pr-4 py-2"
                placeholder="Search..."
              />
            </div>
            <span className="text-gray-400">20 Sep 2019, Friday</span>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="bg-pink-50 rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-pink-600 text-xl font-semibold mb-2">
                Welcome back Anna!
              </h2>
              <p className="text-gray-600 max-w-lg">
                Let's kick off this new term with enthusiasm, focus, and a 
                commitment to success. We look forward to a wonderful 
                and productive term ahead!
              </p>
            </div>
            <img 
              src="/api/placeholder/200/140" 
              alt="Student illustration"
              className="w-48"
            />
          </div>
        </div>

        {/* Progress Tracking Grid */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Latest Results */}
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-semibold">Latest Result</h3>
              <button className="text-blue-500">More →</button>
            </div>
            <div className="space-y-4">
              {units.map((unit, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Unit {index + 1} - {unit.name}</span>
                    <span className="text-gray-400">{unit.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full">
                    <div
                      className={`h-full rounded-full ${
                        index % 2 === 0 ? 'bg-pink-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${unit.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Spent */}
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-semibold">Time Spent on learning</h3>
              <select className="bg-gray-800 text-gray-400 rounded px-2 py-1">
                <option>Last Week</option>
              </select>
            </div>
            <TimeSpentChart />
          </div>
        </div>

        {/* Courses */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white font-semibold">Your Courses</h3>
            <button className="text-gray-400">More →</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div 
                key={index}
                className={`${course.color} rounded-xl p-6`}
              >
                <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs text-white mb-2">
                  {course.level}
                </span>
                <p className="text-sm text-white/70">{course.type}</p>
                <div className="flex justify-between items-center mt-2">
                  <h4 className="text-white font-medium">{course.name}</h4>
                  <span className="text-white">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Profile Section */}
      <div className="w-72 border-l border-gray-800 p-6">
        <div className="flex justify-end">
          <button className="text-gray-400 flex items-center gap-2">
            Logout <LogOut size={18} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center mt-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-white p-1">
              <img 
                src="/api/placeholder/80/80" 
                alt="Profile"
                className="rounded-full"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full text-white flex items-center justify-center text-sm">
              +
            </button>
          </div>
          <h3 className="text-white font-medium mt-4">Anna Morrish</h3>
          <p className="text-gray-400 text-sm">Student</p>
        </div>

        {/* Language Levels */}
        <div className="mt-8 space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">B2</span>
                <span className="text-white">English</span>
              </div>
              <span className="text-gray-400 text-sm">High Intermediate</span>
            </div>
            <div className="h-1 bg-gray-800 rounded-full">
              <div className="h-full w-3/4 bg-blue-500 rounded-full" />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">C1</span>
                <span className="text-white">Spanish</span>
              </div>
              <span className="text-gray-400 text-sm">Advanced</span>
            </div>
            <div className="h-1 bg-gray-800 rounded-full">
              <div className="h-full w-4/5 bg-purple-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Reminders */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-white font-medium">Reminders</h4>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          <div className="space-y-4">
            {reminders.map((reminder, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-lg">{reminder.icon}</span>
                <div>
                  <p className="text-white text-sm">{reminder.title}</p>
                  <p className="text-gray-400 text-xs">{reminder.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;