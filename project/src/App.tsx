import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CoursePage from './components/CoursePage';
import ExpertsPage from './components/ExpertsPage';
import ResourcesPage from './components/ResourcesPage';
import PlansPage from './components/PlansPage';
import DashboardPage from './components/DashboardPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;
      case 'courses':
        return <CoursePage />;
      case 'experts':
        return <ExpertsPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'plans':
        return <PlansPage />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;