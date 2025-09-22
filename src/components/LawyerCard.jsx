import React from "react";
import { Link } from "react-router-dom";

export default function LawyerCard({ lawyer }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 min-h-[28rem] hover:shadow-2xl transition duration-300 flex flex-col items-center">
  
  <img
    src={lawyer.photo}
    alt={lawyer.name}
    className="w-28 h-28 rounded-full mb-4 object-cover object-top"
  />

  <div className="flex flex-col items-center flex-grow justify-center">
    <h3 className="text-xl font-semibold text-gray-800">{lawyer.name}</h3>
    <p className="text-gray-500">{lawyer.specialty}</p>
    <p className="text-gray-600 mt-1">{lawyer.experience}</p>
    <p className="text-yellow-500 font-medium mt-1">⭐ {lawyer.rating}</p>
  </div>

  <Link
    to={`/lawyer/${lawyer.id}`}
    className="mt-4 w-full bg-[rgb(20,184,166)] text-white text-center py-2 rounded-lg border border-teal-800 hover:bg-teal-700 hover:scale-105 transition transform duration-200"
  >
    View Profile
  </Link>
</div>


  );
}
