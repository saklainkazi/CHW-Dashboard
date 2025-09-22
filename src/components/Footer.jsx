import React from "react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">AI Lawyer</h2>
          <p className="mt-2 text-sm">&copy; 2025 AI Lawyer Assistant. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-teal transition">Twitter</a>
          <a href="#" className="hover:text-teal transition">LinkedIn</a>
          <a href="#" className="hover:text-teal transition">Email</a>
        </div>
      </div>
    </footer>
  );
}
