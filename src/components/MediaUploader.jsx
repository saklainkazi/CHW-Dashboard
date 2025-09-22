import React, { useRef } from 'react';

export default function MediaUploader({ onUpload }) {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onUpload(file);
  };

  return (
    <div className="border-2 border-dashed border-gray-300 p-6 rounded text-center hover:border-blue-400 transition cursor-pointer"
         onClick={() => fileInputRef.current.click()}>
      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
      <p className="text-gray-500">Click or drag a file to upload</p>
    </div>
  );
}
