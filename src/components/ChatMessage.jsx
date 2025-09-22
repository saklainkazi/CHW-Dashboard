import React from "react";
import { motion } from "framer-motion";

export default function ChatMessage({ sender, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: sender === "ai" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`max-w-[70%] p-4 rounded-xl mb-3 self-${sender === "ai" ? "start bg-white text-navy" : "end bg-teal text-white"} shadow`}
    >
      {text.split("\n").map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </motion.div>
  );
}
