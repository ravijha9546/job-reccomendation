import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Compass, BarChart2, FileText } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to CareerBoost AI</h1>
      <p className="text-xl mb-8">Your AI-powered career companion</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<Search className="w-12 h-12 text-blue-500" />}
          title="Job Search"
          description="Find your perfect job match"
          link="/job-search"
        />
        <FeatureCard
          icon={<Compass className="w-12 h-12 text-green-500" />}
          title="Career Guidance"
          description="Get personalized career advice"
          link="/career-guidance"
        />
        <FeatureCard
          icon={<BarChart2 className="w-12 h-12 text-purple-500" />}
          title="Dashboard"
          description="Track your job search progress"
          link="/dashboard"
        />
        <FeatureCard
          icon={<FileText className="w-12 h-12 text-red-500" />}
          title="Resume Builder"
          description="Create a standout resume"
          link="/resume-builder"
        />
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default Home;