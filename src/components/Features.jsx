import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaShieldAlt, FaChartLine } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "AI-Powered Advice",
    icon: <FaRobot size={30} className="text-teal" />,
    description: "Smart AI provides accurate and context-aware legal guidance instantly.",
  },
  {
    id: 2,
    title: "Trusted Lawyers",
    icon: <FaShieldAlt size={30} className="text-teal" />,
    description: "Connect with verified and experienced lawyers in every legal domain.",
  },
  {
    id: 3,
    title: "Case Management",
    icon: <FaChartLine size={30} className="text-teal" />,
    description: "Track your cases, documents, and communication in one dashboard.",
  },
];

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12"
      >
        Features
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
