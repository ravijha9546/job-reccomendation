import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const CareerGuidance: React.FC = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement AI-driven career guidance using Azure Cognitive Services
    console.log('Career guidance question:', question);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Career Guidance</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col gap-4">
          <textarea
            placeholder="Ask a question about your career..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="p-2 border rounded h-32"
          />
          <button type="submit" className="bg-green-600 text-white p-2 rounded flex items-center justify-center w-full md:w-auto">
            <MessageCircle className="mr-2" size={20} />
            Get Guidance
          </button>
        </div>
      </form>
      
      {/* Placeholder for AI-generated career advice */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">AI-generated career advice will appear here.</p>
      </div>
    </div>
  );
};

export default CareerGuidance;