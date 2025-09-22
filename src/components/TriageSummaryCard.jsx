import React from 'react';

export default function TriageSummaryCard({ patient }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
      <h2 className="font-bold text-lg mb-2">{patient.name}</h2>
      <div className="text-sm text-gray-600 mb-2">
        Age: {patient.age} | Gender: {patient.gender}
      </div>
      <div className="mb-2">
        <strong>Chronic:</strong> {patient.chronicConditions.length > 0 ? patient.chronicConditions.join(', ') : 'None'}
      </div>
      <div className="mb-2">
        <strong>Allergies:</strong> {patient.allergies.length > 0 ? patient.allergies.join(', ') : 'None'}
      </div>
      <div className="text-xs text-gray-400">
        Added: {new Date(patient.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
