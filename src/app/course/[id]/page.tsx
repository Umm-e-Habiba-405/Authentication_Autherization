"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

// Define a type for the course object
type Courses = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
};

const coursesData: Courses[] = [
  { id: 1, title: "Frontend Development", description: "Learn HTML, CSS, and JavaScript.", category: "Web Development", image: "/img-3.jpg" },
  { id: 2, title: "Backend Development", description: "Master Node.js, Express, and Databases.", category: "Web Development", image: "/images-1.png" },
  { id: 3, title: "UI/UX Design", description: "Design beautiful and user-friendly interfaces.", category: "Design", image: "/img-4.jpg" },
  { id: 4, title: "Data Science", description: "Learn Python, Machine Learning, and Data Analytics.", category: "Data Science", image: "/img-5.jpg" },
  { id: 5, title: "Digital Marketing", description: "Master SEO, PPC, and Social Media Marketing.", category: "Marketing", image: "/img-6.jpg" },
  { id: 6, title: "Mobile App Development", description: "Develop native mobile apps using React Native.", category: "Mobile Development", image: "/img-7.jpg" },
];

interface CoursesDetailPageProps {
  params: { id: string }; // Define the type of the dynamic route parameter
}

const CoursesDetail = ({ params }: CoursesDetailPageProps) => {
  const router = useRouter();
  const { id } = params; // Get 'id' from URL parameter
  const [course, setCourse] = useState<Courses | null>(null);

  useEffect(() => {
    const courseId = parseInt(id); // Parse the 'id' as a number
    const selectedCourse = coursesData.find((course) => course.id === courseId); // Find the course with the matching ID

    if (selectedCourse) {
      setCourse(selectedCourse); // Set the course state
    } else {
      router.push("/404"); // Redirect to 404 if course is not found
    }
  }, [id, router]);

  if (!course) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
         {/* Header */}
       <nav className="bg-blue-600 text-white p-7">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <ul className="flex space-x-4 text-xl">
            <li>
              <Link href="/admin" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/reportPage" className="hover:underline">
                Reports
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Settings
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto px-5 py-24">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{course.title}</h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
            </div>
            <p className="leading-relaxed mb-4">{course.description}</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Category</span>
              <span className="ml-auto text-gray-900">{course.category}</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-gray-900">4</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={course.image} />
        </div>
      </div>
      <div className="p-6 bg-gray-100">
        <button onClick={() => router.push("/course")} className="bg-purple-600 text-white px-6 py-2 rounded-lg">
          Back to Courses
        </button>
      </div>
       {/* Footer */}
       <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Admin Dashboard. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default CoursesDetail;
