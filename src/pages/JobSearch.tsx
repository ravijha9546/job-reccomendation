import React, { useState } from 'react';
import { Search } from 'lucide-react';

const JobSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement job search logic using Azure Machine Learning
    console.log('Searching for:', searchTerm, 'in', location);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Job Search</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-grow p-2 border rounded"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded flex items-center justify-center">
            <Search className="mr-2" size={20} />
            Search
          </button>
        </div>
      </form>
      
      {/* Placeholder for job search results */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600">Job search results will appear here.</p>
      </div>
    </div>
  );
};

export default JobSearch;