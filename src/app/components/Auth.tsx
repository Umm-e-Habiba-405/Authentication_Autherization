"use client";

import React, { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

const Auth = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailResponse = email?.current?.value;
    const passwordResponse = password?.current?.value;

    console.log("Email:", emailResponse, "Password:", passwordResponse);

    const url = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailResponse, password: passwordResponse }),
    });

    const data = await url.json();
    if (data.redirectUrl) {
      router.push(data.redirectUrl);
    }
    console.log("data", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Log In
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Access your account by entering your credentials below.
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email Address
            </label>
            <input
              ref={email}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              ref={password}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
        {/* Additional Links */}
        <div className="mt-6 text-center text-gray-600">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
          <p>
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
