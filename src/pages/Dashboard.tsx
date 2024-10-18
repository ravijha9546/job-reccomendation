import React from 'react';
import { BarChart2, Briefcase, CheckCircle, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Placeholder data
  const stats = [
    { label: 'Applications Submitted', value: 15, icon: Briefcase },
    { label: 'Interviews Scheduled', value: 3, icon: Clock },
    { label: 'Skills Assessed', value: 8, icon: CheckCircle },
    { label: 'Profile Views', value: 42, icon: BarChart2 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{stat.label}</h2>
              <stat.icon className="text-blue-500" size={24} />
            </div>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
      
      {/* Placeholder for job market trends */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Job Market Trends</h2>
        <p className="text-gray-600">AI-powered job market insights will appear here.</p>
      </div>
    </div>
  );
};

export default Dashboard;