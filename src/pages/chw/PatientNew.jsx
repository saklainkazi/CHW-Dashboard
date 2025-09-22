import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import CHWHeader from '../../components/CHWHeader';
import { db } from '../../db/dexieDB';
import { v4 as uuidv4 } from 'uuid';

export default function PatientNew() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: 'Male',
    phone: '',
    language: 'hi',
    allergies: [''],
    chronicConditions: [''],
    address: { village: '', taluka: '', district: '', state: '' }
  });
  const [error, setError] = useState('');

  const handleChange = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleAddressChange = (e, field) => {
    setForm({ ...form, address: { ...form.address, [field]: e.target.value } });
  };

  const handleArrayChange = (value, index, field) => {
    const arr = [...form[field]];
    arr[index] = value;
    setForm({ ...form, [field]: arr });
  };

  const addArrayField = (field) => {
    setForm({ ...form, [field]: [...form[field], ''] });
  };

  const removeArrayField = (field, index) => {
    const arr = [...form[field]];
    arr.splice(index, 1);
    setForm({ ...form, [field]: arr });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.phone) {
      setError('Name, age, and phone are required');
      return;
    }
    const newPatient = {
      id: `pat-${uuidv4()}`,
      ...form,
      age: Number(form.age),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    await db.patients.add(newPatient);
    navigate('/chw/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <CHWHeader title="Add New Patient" /> */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded mt-6">
        <h2 className="text-2xl font-bold mb-6">New Patient Form</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => handleChange(e, 'name')}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              placeholder="Age"
              value={form.age}
              onChange={(e) => handleChange(e, 'age')}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
            />
            <select
              value={form.gender}
              onChange={(e) => handleChange(e, 'gender')}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="text"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => handleChange(e, 'phone')}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
            />
            <select
              value={form.language}
              onChange={(e) => handleChange(e, 'language')}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
            >
              <option value="hi">Hindi</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Village"
              value={form.address.village}
              onChange={(e) => handleAddressChange(e, 'village')}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Taluka"
              value={form.address.taluka}
              onChange={(e) => handleAddressChange(e, 'taluka')}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="District"
              value={form.address.district}
              onChange={(e) => handleAddressChange(e, 'district')}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="State"
              value={form.address.state}
              onChange={(e) => handleAddressChange(e, 'state')}
              className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Allergies */}
          <div>
            <label className="font-semibold mb-2 block">Allergies</label>
            {form.allergies.map((a, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Allergy #${idx + 1}`}
                  value={a}
                  onChange={(e) => handleArrayChange(e.target.value, idx, 'allergies')}
                  className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-400"
                />
                {form.allergies.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayField('allergies', idx)}
                    className="px-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayField('allergies')}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              + Add Allergy
            </button>
          </div>

          {/* Chronic Conditions */}
          <div>
            <label className="font-semibold mb-2 block">Chronic Conditions</label>
            {form.chronicConditions.map((c, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Condition #${idx + 1}`}
                  value={c}
                  onChange={(e) => handleArrayChange(e.target.value, idx, 'chronicConditions')}
                  className="p-2 border rounded w-full focus:ring-2 focus:ring-blue-400"
                />
                {form.chronicConditions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayField('chronicConditions', idx)}
                    className="px-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayField('chronicConditions')}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              + Add Condition
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
          >
            Save Patient
          </button>
        </form>
      </div>
    </div>
  );
}
