import React from 'react';

const SignUp = () => {
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

        {/* Sign Up Form */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Create your account
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">First name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Last name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Username</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Create a password"
              />
              <small className="text-gray-500 text-sm">
                Password must be at least 8 characters and include a mix of letters, numbers, and symbols.
              </small>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Re-enter Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Confirm your password"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Country</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option>Choose your country</option>
                <option>United States</option>
                <option>India</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-purple-500" />
                <span className="ml-2 text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-purple-500 hover:text-purple-400">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-purple-500 hover:text-purple-400">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">
              Create account
            </button>
          </form>

          <div className="mt-6 text-center text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="text-purple-500 hover:text-purple-400">Sign in</a>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500">Or sign up with</p>
            <div className="flex justify-center mt-3 space-x-4">
              <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                <img src="/icons/google.svg" alt="Google" className="w-6 h-6" />
              </button>
              <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </button>
              <button className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
