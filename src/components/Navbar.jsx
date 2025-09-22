import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: "Home", path: "/" },
    { name: "Chat with AI", path: "/chat" },
    { name: "Find a Lawyer", path: "/lawyers" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-navy">AI Lawyer</div>
        <div className="hidden md:flex space-x-6">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`${
                location.pathname === tab.path ? "text-teal font-semibold" : "text-navy"
              } hover:text-teal transition`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`${
                location.pathname === tab.path ? "text-teal font-semibold" : "text-navy"
              } hover:text-teal transition`}
              onClick={() => setIsOpen(false)}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
