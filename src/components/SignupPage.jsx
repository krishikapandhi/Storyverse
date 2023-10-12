import React from 'react';

function SignupPage() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-indigo-500 min-h-screen flex items-center justify-center">
      {/* SVG background pattern */}
      <div className="absolute w-full h-full">
        <img
          src="your-svg-pattern-url.svg" // Replace with your SVG pattern or background image
          alt="Background Pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-96 transform hover:scale-105 transition-transform relative z-10">
        <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-6">Sign Up</h2>
        <form className="space-y-4">
          {/* Your form inputs go here */}

          <button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-2 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Already have an account? <a href="/login" className="text-indigo-700 hover:underline transition-colors duration-300">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
