import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobSearch from './pages/JobSearch';
import CareerGuidance from './pages/CareerGuidance';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job-search" element={<JobSearch />} />
            <Route path="/career-guidance" element={<CareerGuidance />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;