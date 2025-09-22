import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import ChatBot from "./pages/ChatBot";
import Lawyers from "./pages/Lawyers";
import LawyerDetail from "./pages/LawyerDetail";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/lawyers" element={<Lawyers />} />
          <Route path="/lawyer/:id" element={<LawyerDetail />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
