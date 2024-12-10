import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            GPTX
            <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
          </h1>
        </div>

        {/* Login Form */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Welcome back
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Email address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-purple-500" />
                <span className="ml-2 text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-purple-500 hover:text-purple-400">Forgot password?</a>
            </div>

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">
              Sign in
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">
            Don't have an account?{' '}
            <a href="/signup" className="text-purple-500 hover:text-purple-400">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;