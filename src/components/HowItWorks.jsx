import React from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaUserShield, FaHandshake } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Describe Your Case",
    icon: <FaRegLightbulb size={30} className="text-teal" />,
    description: "Tell the AI about your legal situation in simple words. AI understands and analyzes your case instantly.",
  },
  {
    id: 2,
    title: "Get Instant Guidance",
    icon: <FaUserShield size={30} className="text-teal" />,
    description: "Receive step-by-step legal advice or documentation suggestions tailored to your needs.",
  },
  {
    id: 3,
    title: "Connect with Experts",
    icon: <FaHandshake size={30} className="text-teal" />,
    description: "Find verified lawyers specializing in your case and get in touch directly.",
  },
];

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12"
      >
        How It Works
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
