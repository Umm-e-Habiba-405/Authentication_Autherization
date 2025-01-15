"use client"
import React, { useState } from "react";
import Link from "next/link";

const ReportPage = () => {
  const initialReports = [
    { id: 1, title: "Sales Report", date: "2025-01-15", status: "Completed" },
    { id: 2, title: "User Activity Report", date: "2025-01-14", status: "Pending" },
    { id: 3, title: "Revenue Analysis", date: "2025-01-13", status: "Completed" },
  ];

  const [reports, setReports] = useState(initialReports);
  const [filterStatus, setFilterStatus] = useState("All");

  const handleFilterChange = (status:any) => {
    setFilterStatus(status);
    if (status === "All") {
      setReports(initialReports);
    } else {
      setReports(initialReports.filter((report) => report.status === status));
    }
  };

  return (
    <div>
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
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800"> Report Page</h1>

        {/* Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => handleFilterChange("All")}
            className={`px-4 py-2 rounded ${
              filterStatus === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("Completed")}
            className={`px-4 py-2 rounded ${
              filterStatus === "Completed"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => handleFilterChange("Pending")}
            className={`px-4 py-2 rounded ${
              filterStatus === "Pending"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Pending
          </button>
        </div>

        {/* Reports Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{report.id}</td>
                <td className="border border-gray-300 px-4 py-2">{report.title}</td>
                <td className="border border-gray-300 px-4 py-2">{report.date}</td>
                <td
                  className={`border border-gray-300 px-4 py-2 ${
                    report.status === "Completed"
                      ? "text-green-600 font-semibold"
                      : "text-yellow-600 font-semibold"
                  }`}
                >
                  {report.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* No Reports Message */}
        {reports.length === 0 && (
          <p className="text-center text-gray-600 mt-4">No reports found.</p>
        )}
      </div>
      <footer className="bg-gray-800 text-white py-4 mt-72">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Admin Dashboard. All rights
          reserved.
        </div>
      </footer>
    </div>
    </div>
  );
};

export default ReportPage;
