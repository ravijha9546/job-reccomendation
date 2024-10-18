import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 CareerBoost AI. All rights reserved.</p>
        <p className="mt-2">Powered by Microsoft Azure</p>
      </div>
    </footer>
  );
};

export default Footer;