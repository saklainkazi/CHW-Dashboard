import React from 'react';

export default function SymptomSelector({ selected, setSelected, options }) {
  const toggle = (symptom) => {
    if (selected.includes(symptom)) {
      setSelected(selected.filter(s => s !== symptom));
    } else {
      setSelected([...selected, symptom]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((symptom, idx) => (
        <button
          key={idx}
          onClick={() => toggle(symptom)}
          className={`px-3 py-1 rounded border transition ${
            selected.includes(symptom) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-100'
          }`}
        >
          {symptom}
        </button>
      ))}
    </div>
  );
}
