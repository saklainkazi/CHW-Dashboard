import React from "react";
import { motion } from "framer-motion";
import myIcon from "../assets/hero-ai.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="md:flex md:justify-between md:items-center">
      <div className="md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          AI-Powered Lawyer Assistant
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg mb-6 text-gray-200"
        >
          Get instant legal guidance, find expert lawyers, and simplify your legal processes with AI.
        </motion.p>
        <motion.button
          onClick={() => navigate("/chat")}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-[rgb(20,184,166)] text-white font-bold rounded-lg shadow hover:bg-[rgb(17,157,142)] transition"
        >
          Get Started
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <img src={myIcon} alt="My Icon" className="w-56 h-56" />
      </motion.div>
    </div>
  );
}
