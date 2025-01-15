// "use client";
// import Link from "next/link";

// import React from "react";

// const Student = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-green-600 text-white p-6">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Student Portal</h1>
//           <ul className="flex space-x-4">
//             <li>
//               <a href="#" className="hover:underline">
//                 Dashboard
//               </a>
//             </li>
//             <li>
//               <Link href="/course" className="hover:underline">
//                 Courses
//               </Link>
//             </li>
//             <li>
//               <a href="/progress" className="hover:underline">
//                 Progress
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Logout
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Header */}
//       <header className="container mx-auto p-6 text-center">
//         <h2 className="text-4xl font-bold text-green-600 mb-4">
//           Welcome, Student!
//         </h2>
//         <p className="text-lg text-gray-700">
//           Explore your courses, track your progress, and manage your schedule
//           below.
//         </p>
//       </header>

//       {/* Course Section */}
//       <section className="container mx-auto p-6">
//         <h3 className="text-2xl font-bold text-gray-700 mb-4">Your Courses</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h4 className="text-xl font-bold text-gray-800">Typescript</h4>
//             <p className="text-gray-600">
//               Algebra, calculus, and geometry for advanced learners.
//             </p>
//             <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">
//               View Details
//             </button>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h4 className="text-xl font-bold text-gray-800">Next-Js</h4>
//             <p className="text-gray-600">
//               Physics, chemistry, and biology for inquisitive minds.
//             </p>
//             <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">
//               View Details
//             </button>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <h4 className="text-xl font-bold text-gray-800">React-Js</h4>
//             <p className="text-gray-600">
//               Explore world history and significant events in the past.
//             </p>
//             <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">
//               View Details
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Progress Section */}
//       <section className="container mx-auto p-6">
//         <h3 className="text-2xl font-bold text-gray-700 mb-4">
//           Learning Progress
//         </h3>
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h4 className="text-xl font-bold text-gray-800 mb-2">
//             Course Completion
//           </h4>
//           <ul className="space-y-4">
//             <li className="flex items-center justify-between">
//               <span className="text-gray-700">Typescript</span>
//               <span className="text-green-600 font-bold">75%</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span className="text-gray-700">React-js</span>
//               <span className="text-green-600 font-bold">50%</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span className="text-gray-700">Next-Js</span>
//               <span className="text-green-600 font-bold">90%</span>
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Schedule Section */}
//       <section className="container mx-auto p-6">
//         <h3 className="text-2xl font-bold text-gray-700 mb-4">Your Schedule</h3>
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gray-200 text-gray-700">
//                 <th className="py-2 px-4">Day</th>
//                 <th className="py-2 px-4">Time</th>
//                 <th className="py-2 px-4">Subject</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="py-2 px-4">Monday</td>
//                 <td className="py-2 px-4">9:00 AM - 10:00 AM</td>
//                 <td className="py-2 px-4">Typescript</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="py-2 px-4">Tuesday</td>
//                 <td className="py-2 px-4">10:00 AM - 11:00 AM</td>
//                 <td className="py-2 px-4">React-Js</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="py-2 px-4">Wednesday</td>
//                 <td className="py-2 px-4">1:00 PM - 2:00 PM</td>
//                 <td className="py-2 px-4">Next-Js</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center p-4">
//         <p>&copy; 2025 Student Portal. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Student;
"use client";
import Link from "next/link";
import React from "react";

const Student = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-green-600 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Portal</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Dashboard
              </a>
            </li>
            <li>
              <Link href="/course" className="hover:underline">
                Courses
              </Link>
            </li>
            <li>
              <a href="/progress" className="hover:underline">
                Progress
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="container mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-4">
          Welcome, Student!
        </h2>
        <p className="text-lg text-gray-700">
          Explore your courses, track your progress, and manage your schedule
          below.
        </p>
      </header>

      {/* Course Section */}
      <section className="container mx-auto p-6">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Your Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold text-gray-800">Typescript</h4>
            <p className="text-gray-600">
              Algebra, calculus, and geometry for advanced learners.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">
              View Details
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold text-gray-800">Next-Js</h4>
            <p className="text-gray-600">
              Physics, chemistry, and biology for inquisitive minds.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">
              View Details
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold text-gray-800">React-Js</h4>
            <p className="text-gray-600">
              Explore world history and significant events in the past.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="container mx-auto p-6">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">
          Learning Progress
        </h3>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            Course Completion
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Typescript</span>
              <span className="text-green-600 font-bold">75%</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700">React-js</span>
              <span className="text-green-600 font-bold">50%</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Next-Js</span>
              <span className="text-green-600 font-bold">90%</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="container mx-auto p-6">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Your Schedule</h3>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-2 px-4">Day</th>
                  <th className="py-2 px-4">Time</th>
                  <th className="py-2 px-4">Subject</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Monday</td>
                  <td className="py-2 px-4">9:00 AM - 10:00 AM</td>
                  <td className="py-2 px-4">Typescript</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Tuesday</td>
                  <td className="py-2 px-4">10:00 AM - 11:00 AM</td>
                  <td className="py-2 px-4">React-Js</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Wednesday</td>
                  <td className="py-2 px-4">1:00 PM - 2:00 PM</td>
                  <td className="py-2 px-4">Next-Js</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 Student Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Student;
