// src/components/VitalsPanel.jsx
import React, { useState } from "react";
import { Check, X, Thermometer, Activity } from "lucide-react";

/**
 * Props:
 *  - vitals: { bp, systolic, diastolic, pulse, tempCel, spo2, glucose, respRate }
 *  - onChange: function(updatedVitals)
 */

export default function VitalsPanel({ vitals = {}, onChange = () => {} }) {
  const [local, setLocal] = useState({
    systolic: vitals.systolic || "",
    diastolic: vitals.diastolic || "",
    pulse: vitals.pulse || "",
    tempCel: vitals.tempCel || "",
    spo2: vitals.spo2 || "",
    glucose: vitals.glucose || "",
    respRate: vitals.respRate || ""
  });

  const [showBPGuide, setShowBPGuide] = useState(false);
  const [showTempGuide, setShowTempGuide] = useState(false);

  function updateField(k, v) {
    setLocal(prev => {
      const next = { ...prev, [k]: v };
      onChange(next);
      return next;
    });
  }

  const parseNumber = (v) => {
    const n = v === "" ? "" : Number(v);
    return isNaN(n) ? "" : n;
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-3">Vitals</h3>

      {/* BP row */}
      <div className="flex gap-2 items-center mb-3">
        <div className="flex-1">
          <label className="text-xs text-gray-600">Systolic</label>
          <input
            type="number"
            min="30"
            max="300"
            value={local.systolic}
            onChange={(e) => updateField("systolic", parseNumber(e.target.value))}
            className="w-full border rounded px-2 py-2 mt-1"
            placeholder="e.g., 120"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs text-gray-600">Diastolic</label>
          <input
            type="number"
            min="20"
            max="200"
            value={local.diastolic}
            onChange={(e) => updateField("diastolic", parseNumber(e.target.value))}
            className="w-full border rounded px-2 py-2 mt-1"
            placeholder="e.g., 80"
          />
        </div>
        <div className="w-40">
          <label className="text-xs text-gray-600">Pulse</label>
          <input
            type="number"
            min="30"
            max="220"
            value={local.pulse}
            onChange={(e) => updateField("pulse", parseNumber(e.target.value))}
            className="w-full border rounded px-2 py-2 mt-1"
            placeholder="72"
          />
        </div>

        <button
          type="button"
          onClick={() => setShowBPGuide(true)}
          className="ml-2 bg-blue-600 text-white px-3 py-2 rounded"
        >
          BP Guide
        </button>
      </div>

      {/* Temp row */}
      <div className="flex gap-2 items-center mb-3">
        <div className="flex-1">
          <label className="text-xs text-gray-600">Temperature (°C)</label>
          <input
            type="number"
            step="0.1"
            min="30"
            max="45"
            value={local.tempCel}
            onChange={(e) => updateField("tempCel", parseNumber(e.target.value))}
            className="w-full border rounded px-2 py-2 mt-1"
            placeholder="e.g., 37.0"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs text-gray-600">SpO2 (%)</label>
          <input
            type="number"
            min="50"
            max="100"
            value={local.spo2}
            onChange={(e) => updateField("spo2", parseNumber(e.target.value))}
            className="w-full border rounded px-2 py-2 mt-1"
            placeholder="e.g., 98"
          />
        </div>
        <div className="w-40">
          <label className="text-xs text-gray-600">Glucose (mg/dL)</label>
          <input
            type="number"
            min="20"
            max="500"
            value={local.glucose}
            onChange={(e) => updateField("glucose", parseNumber(e.target.value))}
            className="w-full border rounded px-2 py-2 mt-1"
            placeholder="e.g., 95"
          />
        </div>

        <button
          type="button"
          onClick={() => setShowTempGuide(true)}
          className="ml-2 bg-blue-600 text-white px-3 py-2 rounded"
        >
          Temp Guide
        </button>
      </div>

      {/* Resp Rate */}
      <div className="mb-3">
        <label className="text-xs text-gray-600">Respiratory Rate (breaths/min)</label>
        <input
          type="number"
          min="6"
          max="60"
          value={local.respRate}
          onChange={(e) => updateField("respRate", parseNumber(e.target.value))}
          className="w-36 border rounded px-2 py-2 mt-1"
          placeholder="e.g., 18"
        />
      </div>

      {/* Quick status row */}
      <div className="flex items-center gap-3 mt-2">
        <div className="text-sm text-gray-700">
          <strong>Auto-checks:</strong>{" "}
          <span className="ml-2 text-gray-500">BP valid: {local.systolic && local.diastolic ? "Yes" : "No"}</span>
        </div>
        <div className="ml-auto text-sm text-gray-500">Last edited: just now</div>
      </div>

      {/* Guides Modals */}
      {showBPGuide && (
        <GuideModal title="How to measure BP (digital cuff)" onClose={() => setShowBPGuide(false)}>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Sit patient with arm at heart level, relaxed.</li>
            <li>Wrap cuff 2 cm above elbow, snug but not tight.</li>
            <li>Start measurement; wait for steady reading. Take 2 readings 1–2 min apart.</li>
            <li>Record both or average them.</li>
          </ol>
        </GuideModal>
      )}

      {showTempGuide && (
        <GuideModal title="How to measure Temperature (digital thermometer)" onClose={() => setShowTempGuide(false)}>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Use clean probe; place oral/axillary per device instructions.</li>
            <li>Wait required time per device; keep patient still.</li>
            <li>Record temperature and note method (oral/axillary).</li>
          </ol>
        </GuideModal>
      )}
    </div>
  );
}

/* Small Modal component */
function GuideModal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold">{title}</h4>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="text-sm">{children}</div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded">I Understand</button>
        </div>
      </div>
    </div>
  );
}
