import React from 'react';

export default function PatientSearch({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search patients..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="p-3 border rounded w-full md:w-64 focus:ring-2 focus:ring-blue-400"
    />
  );
}
