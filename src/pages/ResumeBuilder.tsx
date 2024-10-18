import React, { useState } from 'react';
import { FileText, Upload } from 'lucide-react';

const ResumeBuilder: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
      // TODO: Implement resume parsing using Azure Form Recognizer
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">AI-Powered Resume Builder</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload Your Existing Resume</h2>
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">PDF, DOCX, or TXT (MAX. 10MB)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.docx,.txt" />
          </label>
        </div>
        {resumeFile && <p className="mt-2 text-sm text-gray-600">File uploaded: {resumeFile.name}</p>}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">AI-Enhanced Resume</h2>
        <button className="bg-blue-600 text-white p-2 rounded flex items-center justify-center">
          <FileText className="mr-2" size={20} />
          Generate Enhanced Resume
        </button>
        {/* Placeholder for AI-enhanced resume content */}
        <div className="mt-4 p-4 border rounded">
          <p className="text-gray-600">Your AI-enhanced resume will appear here.</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;