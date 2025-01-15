"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProgressPage = () => {
  // Example progress data
  const [progress, setProgress] = useState(50); // Progress starts at 50%

  // Simulating progress increase
  const handleProgressIncrease = () => {
    setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
  };

  // Determine the image based on progress
  const getProgressImage = () => {
    if (progress < 30) return "/images/progress-start.jpg";
    if (progress < 70) return "/images/progress-mid.jpg";
    return "/images/progress-complete.jpg";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-purple-700 text-white py-4 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Your Progress</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/admin" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="/course" className="hover:underline">Courses</a>
              </li>
              <li>
                <a href="/student" className="hover:underline">Student Dashboard</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Track Your Progress
        </h2>

        {/* Progress Bar */}
        <div className="mb-10">
          <p className="text-xl font-semibold text-gray-700 mb-4">Completion Progress</p>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                  {progress}% Complete
                </span>
              </div>
            </div>
            <div className="flex mb-2">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`bg-pink-600 h-3 rounded-full transition-all duration-500 ease-in-out`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Details */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Keep Going!</h3>
          <p className="text-lg text-gray-600 mb-8">
            You are making great progress toward your goal. Keep pushing forward to complete your tasks.
          </p>

          {/* Progress Image */}
          <div className="flex justify-center mb-8">
            <Image
              src={"/img-9.jpg"} // Dynamically change the image based on progress
              alt="Progress"  width={100} height={100}
              className="rounded-lg shadow-md w-72 h-40 object-cover"
            />
          </div>
        </div>

        {/* Button to Increase Progress */}
        <div className="text-center">
          <button
            onClick={handleProgressIncrease}
            className="bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Increase Progress
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Progress Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProgressPage;
