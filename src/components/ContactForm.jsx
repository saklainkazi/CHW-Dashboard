import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm({ lawyerName }) {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setMessage("");
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className="bg-softGray p-6 rounded-xl shadow-md flex flex-col gap-4"
    >
      <h3 className="text-xl font-semibold mb-2">Send a message to {lawyerName}</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal resize-none"
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="bg-teal text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition w-32"
      >
        Send
      </button>
      {submitted && <p className="text-green-600 font-semibold">Message sent successfully!</p>}
    </motion.form>
  );
}
