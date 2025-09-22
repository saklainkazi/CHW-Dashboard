// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tutorials from "./pages/Tutorials";

// CHW pages
import CHWDashboard from "./pages/chw/Dashboard";
import PatientNew from "./pages/chw/PatientNew";
import PatientView from "./pages/chw/PatientView";
import Login from "./pages/chw/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <Routes>
          {/* Landing Page = CHW Dashboard (patient list) */}
          <Route path="/" element={<Navigate to="/chw/dashboard" replace />} />

          {/* CHW routes */}
          <Route path="/chw/login" element={<Login />} />
          <Route path="/chw/dashboard" element={<CHWDashboard />} />
          <Route path="/chw/patient/new" element={<PatientNew />} />
          <Route path="/chw/patient/:id" element={<PatientView />} />

          {/* Tutorials */}
          <Route path="/tutorials" element={<Tutorials />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/chw/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
