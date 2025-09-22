import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import CHWHeader from '../../components/CHWHeader';
import VitalsPanel from '../../components/VitalsPanel';
import { db } from '../../db/dexieDB';
import MediaUploader from '../../components/MediaUploader';

export default function PatientView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [activeTab, setActiveTab] = useState('info');
  const [encounters, setEncounters] = useState([]);
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const fetchPatient = async () => {
      const pat = await db.patients.get(id);
      if (!pat) navigate('/chw/dashboard');
      setPatient(pat);

      const enc = await db.encounters.where('patientId').equals(id).toArray();
      setEncounters(enc);

      const media = await db.media.where('encounterId').anyOf(enc.map(e => e.id)).toArray();
      setMediaList(media);
    };
    fetchPatient();
  }, [id]);

  const handleUpload = async (file) => {
    // Simulate saving media
    const newMedia = {
      id: `media-${Date.now()}`,
      encounterId: encounters[0]?.id || 'none',
      type: file.type,
      name: file.name,
      url: URL.createObjectURL(file),
      createdAt: new Date().toISOString()
    };
    await db.media.add(newMedia);
    setMediaList([...mediaList, newMedia]);
  };

  if (!patient) return <p className="text-center mt-20 text-gray-500">Loading patient...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <CHWHeader title={`Patient: ${patient.name}`} /> */}
      <div className="max-w-6xl mx-auto p-6">

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {['info','vitals','encounters','media'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-t-lg border-b-2 ${
                activeTab===tab ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-500'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white shadow rounded p-6">
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><strong>Age:</strong> {patient.age}</div>
                <div><strong>Gender:</strong> {patient.gender}</div>
                <div><strong>Phone:</strong> {patient.phone}</div>
                <div><strong>Language:</strong> {patient.language}</div>
              </div>
              <div>
                <strong>Address:</strong>
                <p>{patient.address.village}, {patient.address.taluka}, {patient.address.district}, {patient.address.state}</p>
              </div>
              <div>
                <strong>Allergies:</strong>
                {patient.allergies.length === 0 ? ' None' :
                  patient.allergies.map((a, idx) => (
                    <span key={idx} className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded-full mr-2">{a}</span>
                  ))
                }
              </div>
              <div>
                <strong>Chronic Conditions:</strong>
                {patient.chronicConditions.length === 0 ? ' None' :
                  patient.chronicConditions.map((c, idx) => (
                    <span key={idx} className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mr-2">{c}</span>
                  ))
                }
              </div>
            </div>
          )}

          {activeTab === 'vitals' && (
            <div>
              <h3 className="font-semibold mb-4">Latest Vitals</h3>
              {encounters.length === 0 ? (
                <p className="text-gray-500">No vitals recorded yet.</p>
              ) : (
                <div className="space-y-4">
                  {encounters.map((e) => (
                    <VitalsPanel key={e.id} vitals={e.vitals || {bp:'', hr:'', temp:''}} setVitals={()=>{}} />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'encounters' && (
            <div>
              <h3 className="font-semibold mb-4">Encounters</h3>
              {encounters.length === 0 ? (
                <p className="text-gray-500">No encounters recorded yet.</p>
              ) : (
                <ul className="space-y-2">
                  {encounters.map((e) => (
                    <li key={e.id} className="p-3 border rounded shadow-sm hover:shadow-md transition">
                      <strong>Time:</strong> {new Date(e.ts).toLocaleString()}<br/>
                      <strong>Synced:</strong> {e.synced ? 'Yes' : 'No'}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {activeTab === 'media' && (
            <div>
              <h3 className="font-semibold mb-4">Media Uploads</h3>
              <MediaUploader onUpload={handleUpload} />
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {mediaList.map((m) => (
                  <div key={m.id} className="border rounded overflow-hidden shadow hover:shadow-md transition">
                    {m.type.startsWith('image') ? (
                      <img src={m.url} alt={m.name} className="w-full h-32 object-cover"/>
                    ) : (
                      <div className="h-32 flex items-center justify-center bg-gray-100 text-gray-500">{m.name}</div>
                    )}
                    <div className="p-2 text-sm">{m.name}</div>
                  </div>
                ))}
                {mediaList.length === 0 && <p className="text-gray-500 col-span-full">No media uploaded yet.</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
