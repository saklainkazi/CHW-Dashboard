import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    text: "The AI Lawyer Assistant saved me hours of research. Highly recommend it for quick legal guidance!",
    role: "Entrepreneur",
  },
  {
    id: 2,
    name: "David M.",
    text: "Finding a reliable lawyer was never easier. The platform is intuitive and extremely helpful.",
    role: "Small Business Owner",
  },
  {
    id: 3,
    name: "Priya S.",
    text: "I loved the AI chat feature. It helped me understand complex legal jargon effortlessly.",
    role: "Freelancer",
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12"
      >
        What Our Users Say
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between h-full"
          >
            <p className="text-gray-700 italic mb-4">"{t.text}"</p>
            <div className="text-left">
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
