
"use client";

import React from "react";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
       <nav className="bg-blue-600 text-white p-7">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <ul className="flex space-x-4 text-xl">
            <li>
              <Link href="#" className="hover:underline">
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

       {/* Dashboard Header */}
       <header className="container mx-auto p-6 text-center">
         <h2 className="text-4xl font-bold text-blue-600 mb-4">
           Welcome, Admin!
         </h2>
         <p className="text-lg text-gray-700">
           Manage your application and view the latest stats and reports below.
         </p>
       </header>
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Statistics Section */}
      <section className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Total Users</h3>
          <p className="text-2xl font-semibold text-blue-600">1,245</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">New Signups</h3>
          <p className="text-2xl font-semibold text-green-600">87</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Total Sales</h3>
          <p className="text-2xl font-semibold text-yellow-600">$14,560</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Pending Tickets</h3>
          <p className="text-2xl font-semibold text-red-600">12</p>
        </div>
      </section>

 {/* User Management Section */}
 <section id="users" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            User Management
          </h2>
          <div className="bg-white shadow rounded-lg p-6">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2 text-left">User ID</th>
                  <th className="border p-2 text-left">Name</th>
                  <th className="border p-2 text-left">Email</th>
                  <th className="border p-2 text-left">Role</th>
                  <th className="border p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">John Doe</td>
                  <td className="border p-2">john@example.com</td>
                  <td className="border p-2">Admin</td>
                  <td className="border p-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>

              <tbody>
                <tr>
                  <td className="border p-2">2</td>
                  <td className="border p-2">Albert</td>
                  <td className="border p-2">Albert@example.com</td>
                  <td className="border p-2">User</td>
                  <td className="border p-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </section>

        

        {/* Settings Section */}
        <section id="settings">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Settings</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="siteName"
                  className="block text-gray-700 font-medium"
                >
                  Site Name
                </label>
                <input
                  id="siteName"
                  type="text"
                  placeholder="Enter site name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="theme"
                  className="block text-gray-700 font-medium"
                >
                  Theme
                </label>
                <select
                  id="theme"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </section>
      </main>

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

export default AdminPage;

