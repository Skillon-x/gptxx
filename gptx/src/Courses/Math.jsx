import React, { useState } from 'react';
import { Calculator, Mic } from 'lucide-react';

const Math = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  const topics = [
    { name: "All", light: true },
    { name: "Basis", light: true },
    { name: "pre algebra", light: true },
    { name: "Algebra", light: true },
    { name: "Gemotrty", light: true },
    { name: "Statics & Probability", dark: true },
    { name: "Differentitional equation", dark: true },
    { name: "Trigonometry", dark: true },
    { name: "Calculus", light: true },
    { name: "Advanced Math", dark: true }
  ];

  const scientificButtons = [
    ['sin', 'cos', 'tan', 'π'],
    ['√', 'x²', '^', 'log'],
    ['(', ')', 'e', 'ln'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['DEL', 'AC']
  ];

  const [display, setDisplay] = useState('0');

  const calculate = (value) => {
    try {
      switch(value) {
        case 'AC':
          setDisplay('0');
          break;
        case 'DEL':
          setDisplay(display.slice(0, -1) || '0');
          break;
        case '=':
          setDisplay(eval(display).toString());
          break;
        case 'sin':
          setDisplay(Math.sin(parseFloat(display)).toString());
          break;
        case 'cos':
          setDisplay(Math.cos(parseFloat(display)).toString());
          break;
        case 'tan':
          setDisplay(Math.tan(parseFloat(display)).toString());
          break;
        case '√':
          setDisplay(Math.sqrt(parseFloat(display)).toString());
          break;
        case 'x²':
          setDisplay(Math.pow(parseFloat(display), 2).toString());
          break;
        case 'π':
          setDisplay(Math.PI.toString());
          break;
        case 'e':
          setDisplay(Math.E.toString());
          break;
        case 'log':
          setDisplay(Math.log10(parseFloat(display)).toString());
          break;
        case 'ln':
          setDisplay(Math.log(parseFloat(display)).toString());
          break;
        default:
          setDisplay(display === '0' ? value : display + value);
      }
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Navigation */}
      <div className="mb-8">
        <p className="text-gray-300 mb-4">Courses&gt;Math&gt;Basic Math</p>
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
          Math Helper
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Get easy-to-follow answers for all your basic math questions. StudyX.AI helps you
          learn math step-by-step, so you can feel confident and succeed in your studies.
        </p>

        {/* Input Area */}
        <div className="border-2 border-dashed border-purple-500 rounded-lg p-6 relative">
          <textarea 
            className="w-full h-32 bg-transparent text-white placeholder-gray-500 resize-none focus:outline-none"
            placeholder="ASK ANYTHING"
          />
          <div className="absolute bottom-4 left-4 flex space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Mic className="w-6 h-6 text-gray-400" />
            </button>
            <button 
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setShowCalculator(!showCalculator)}
            >
              <Calculator className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Scientific Calculator Popup */}
        {showCalculator && (
          <div className="fixed bottom-20 right-4 bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-800 w-80">
            <div className="mb-4">
              <div className="text-lg text-white">Scientific Calculator</div>
            </div>

            {/* Calculator Display */}
            <div className="bg-gray-800 text-right p-4 rounded mb-4 text-white text-xl overflow-x-auto">
              {display}
            </div>

            {/* Calculator Buttons */}
            <div className="grid gap-2">
              {scientificButtons.map((row, i) => (
                <div key={i} className="grid grid-cols-4 gap-2">
                  {row.map((btn) => (
                    <button
                      key={btn}
                      onClick={() => calculate(btn)}
                      className={`p-3 rounded transition-colors ${
                        btn === 'AC' || btn === 'DEL'
                          ? 'bg-red-600 text-white hover:bg-red-700 col-span-2'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Math;