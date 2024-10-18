import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Briefcase size={24} />
          <span className="text-xl font-bold">CareerBoost AI</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/job-search" className="hover:text-blue-200">Job Search</Link></li>
            <li><Link to="/career-guidance" className="hover:text-blue-200">Career Guidance</Link></li>
            <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
            <li><Link to="/resume-builder" className="hover:text-blue-200">Resume Builder</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;