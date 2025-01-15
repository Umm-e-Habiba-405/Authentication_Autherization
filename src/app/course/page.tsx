"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const coursesData = [
  { id: 1, title: "Frontend Development", description: "Learn HTML, CSS, and JavaScript.", category: "Web Development", image: "/img-3.jpg" },
  { id: 2, title: "Backend Development", description: "Master Node.js, Express, and Databases.", category: "Web Development", image: "/images-1.png" },
  { id: 3, title: "UI/UX Design", description: "Design beautiful and user-friendly interfaces.", category: "Design", image: "/img-4.jpg" },
  { id: 4, title: "Data Science", description: "Learn Python, Machine Learning, and Data Analytics.", category: "Data Science", image: "/img-5.jpg" },
  { id: 5, title: "Digital Marketing", description: "Master SEO, PPC, and Social Media Marketing.", category: "Marketing", image: "/img-6.jpg" },
  { id: 6, title: "Mobile App Development", description: "Develop native mobile apps using React Native.", category: "Mobile Development", image: "/img-7.jpg" },
];

const CoursesPage = () => {
  const router = useRouter();
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [category, setCategory] = useState("All");

  const handleCategoryFilter = (selectedCategory: string) => {
    setCategory(selectedCategory);
    if (selectedCategory === "All") {
      setFilteredCourses(coursesData);
    } else {
      setFilteredCourses(coursesData.filter(course => course.category === selectedCategory));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-purple-700 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Our Courses</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/student" className="hover:underline">Student Dashboard</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Browse by Category</h2>
          <div className="space-x-4">
            <button 
              onClick={() => handleCategoryFilter("All")}
              className={`px-4 py-2 rounded-lg ${category === "All" ? "bg-purple-600 text-white" : "bg-gray-300"}`}
            >
              All
            </button>
            <button 
              onClick={() => handleCategoryFilter("Web Development")}
              className={`px-4 py-2 rounded-lg ${category === "Web Development" ? "bg-purple-600 text-white" : "bg-gray-300"}`}
            >
              Web Development
            </button>
            <button 
              onClick={() => handleCategoryFilter("Design")}
              className={`px-4 py-2 rounded-lg ${category === "Design" ? "bg-purple-600 text-white" : "bg-gray-300"}`}
            >
              Design
            </button>
            <button 
              onClick={() => handleCategoryFilter("Data Science")}
              className={`px-4 py-2 rounded-lg ${category === "Data Science" ? "bg-purple-600 text-white" : "bg-gray-300"}`}
            >
              Data Science
            </button>
            <button 
              onClick={() => handleCategoryFilter("Marketing")}
              className={`px-4 py-2 rounded-lg ${category === "Marketing" ? "bg-purple-600 text-white" : "bg-gray-300"}`}
            >
              Marketing
            </button>
            <button 
              onClick={() => handleCategoryFilter("Mobile Development")}
              className={`px-4 py-2 rounded-lg ${category === "Mobile Development" ? "bg-purple-600 text-white" : "bg-gray-300"}`}
            >
              Mobile Development
            </button>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
            <div className="p-4 bg-gray-100">
              <button 
                onClick={() => router.push(`/course/${course.id}`)} 
                className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </main>

      
    </div>
  );
};

export default CoursesPage;
