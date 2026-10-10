import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardShowcase from './components/DashboardShowcase';
import FeatureCards from './components/FeatureCards';
import AISmartSection from './components/AISmartSection';
import AdminDashboard from './components/AdminDashboard';
import ShowInterestModal from './components/ShowInterestModal';
import Footer from './components/Footer';

function App() {
  const [activeView, setActiveView] = useState('landing'); // 'landing' | 'dashboard'
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="app-root">
      {activeView === 'landing' ? (
        <>
          {/* Top Sticky Header */}
          <Navbar
            activeView={activeView}
            setActiveView={setActiveView}
            onOpenDemoModal={() => setIsInterestModalOpen(true)}
          />

          <main id="main-content">
            {/* 1. Main Hero: "Work gets better when everything works together." (Screenshot 2) */}
            <Hero onShowInterest={() => setIsInterestModalOpen(true)} />

            {/* 2. Interactive Operating Layer Showcase with Magnifying Lenses (Screenshots 4 & 5) */}
            <DashboardShowcase
              onLaunchFullDashboard={() => setActiveView('dashboard')}
            />

            {/* 3. Core Solutions: "Less switching. More moving forward." (Screenshots 1 & 3) */}
            <FeatureCards
              onExploreFeature={() => setIsInterestModalOpen(true)}
            />

            {/* 4. Meet Aaralia AI: "Intelligence that works with your people." (Screenshot 3) */}
            <AISmartSection />
          </main>

          {/* Footer with Links and Demo CTA */}
          <Footer
            onOpenDemoModal={() => setIsInterestModalOpen(true)}
            onSwitchToDashboard={() => setActiveView('dashboard')}
          />
        </>
      ) : (
        /* Full Live Interactive Admin Dashboard App View */
        <AdminDashboard onBackToLanding={() => setActiveView('landing')} />
      )}

      {/* Show Interest & Demo Request Modal */}
      <ShowInterestModal
        isOpen={isInterestModalOpen}
        onClose={() => setIsInterestModalOpen(false)}
      />
    </div>
  );
}

export default App;
