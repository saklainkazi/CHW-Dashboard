import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import CHWHeader from '../../components/CHWHeader';
import PatientSearch from '../../components/PatientSearch';
import TriageSummaryCard from '../../components/TriageSummaryCard';
import { db } from '../../db/dexieDB';
import patientsData from '../../mock/patients.json';

export default function Dashboard() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState('All');

  // Seed Dexie with dummy patients
  useEffect(() => {
    const seedDB = async () => {
      const count = await db.patients.count();
      if (count === 0) {
        await db.patients.bulkAdd(patientsData);
      }
      const allPatients = await db.patients.toArray();
      setPatients(allPatients);
    };
    seedDB();
  }, []);

  const handlePatientClick = (id) => {
    navigate(`/chw/patient/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this patient record?')) {
      await db.patients.delete(id); // remove from Dexie
      setPatients((prev) => prev.filter((p) => p.id !== id)); // update local state
    }
  };

  // Filter & search
  const filteredPatients = patients
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => genderFilter === 'All' || p.gender === genderFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <CHWHeader title="CHW Dashboard" /> */}
      <div className="p-6 max-w-7xl mx-auto">
        {/* Top Controls */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 mb-6">
          <PatientSearch search={search} setSearch={setSearch} />
          <div className="flex gap-2">
            <select
              className="p-2 border rounded focus:ring-2 focus:ring-blue-400"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="All">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button
              onClick={() => navigate('/chw/patient/new')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              + New Patient
            </button>
          </div>
        </div>

        {/* Patient Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((p) => (
            <div
              key={p.id}
              className="bg-white p-4 shadow rounded relative cursor-pointer transform hover:scale-105 transition"
            >
              <div onClick={() => handlePatientClick(p.id)}>
                <TriageSummaryCard patient={p} />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent navigation
                  handleDelete(p.id);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
          {filteredPatients.length === 0 && (
            <p className="text-gray-500 col-span-full text-center mt-6">
              No patients found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
