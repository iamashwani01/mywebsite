// src/pages/ProductForm.js
import React from "react";

export default function ProductForm() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Product Registration</h2>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="text"
          placeholder="Product Key"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="file"
          accept=".pdf,.jpeg,.png"
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white py-2 rounded font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
