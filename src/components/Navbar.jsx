// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Keep only Dashboard and Tutorials
  const navItems = [
    { name: "Dashboard", path: "/chw/dashboard" },
    { name: "Tutorials", path: "/tutorials" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / App Name */}
        <Link to="/chw/dashboard" className="text-2xl font-bold tracking-wide">
          SehatSathi
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium transition-colors ${
                location.pathname === item.path
                  ? "border-b-2 border-white pb-1"
                  : "hover:text-gray-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
