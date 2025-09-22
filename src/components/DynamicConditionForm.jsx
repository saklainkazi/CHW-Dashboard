import React from 'react';

export default function DynamicConditionForm({ conditions, setConditions }) {
  const handleChange = (value, idx) => {
    const arr = [...conditions];
    arr[idx] = value;
    setConditions(arr);
  };

  const addField = () => setConditions([...conditions, '']);
  const removeField = (idx) => setConditions(conditions.filter((_, i) => i !== idx));

  return (
    <div className="space-y-2">
      {conditions.map((cond, idx) => (
        <div key={idx} className="flex gap-2">
          <input
            type="text"
            value={cond}
            onChange={(e) => handleChange(e.target.value, idx)}
            className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={() => removeField(idx)} className="px-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Remove</button>
        </div>
      ))}
      <button onClick={addField} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">+ Add Condition</button>
    </div>
  );
}
