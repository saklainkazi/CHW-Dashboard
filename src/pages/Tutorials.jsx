import React, { useState, useEffect } from 'react';
import tutorialsData from "../mock/tutorials.json";

export default function Tutorials() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    setTutorials(tutorialsData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6 grid gap-6">
        {tutorials.map((tut) => (
          <div
            key={tut.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">{tut.title}</h2>

              {/* Instructions / Steps */}
              <ol className="list-decimal list-inside space-y-2 mb-4">
                {tut.steps.map((step, idx) => (
                  <li key={idx} className="p-2 bg-gray-100 rounded">
                    {step}
                  </li>
                ))}
              </ol>

              {/* Media / Images */}
              {tut.media.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {tut.media.map((m, idx) => (
                    <img
                      key={idx}
                      src={m}
                      alt={`Step media ${idx}`}
                      className="w-full h-40 object-cover rounded shadow"
                    />
                  ))}
                </div>
              )}

              {/* Video Placeholder */}
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Tutorial Video</h3>
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded shadow">
                  <p className="text-gray-500">Video will appear here</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {tutorials.length === 0 && (
          <p className="text-center text-gray-500">No tutorials available.</p>
        )}
      </div>
    </div>
  );
}
