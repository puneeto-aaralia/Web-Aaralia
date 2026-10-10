import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import AISmartSection from './components/AISmartSection';
import HRSuiteSection from './components/HRSuiteSection';
import DashboardShowcase from './components/DashboardShowcase';
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
          {/* Top Clean Header matching design */}
          <Navbar
            activeView={activeView}
            setActiveView={setActiveView}
          />

          <main id="main-content">
            {/* 1. Main Hero: "Work gets better when everything works together." */}
            <Hero onShowInterest={() => setIsInterestModalOpen(true)} />

            {/* 2. Platform Core Solutions: "Less switching. More moving forward." (Images 1 & 2) */}
            <FeatureCards
              onExploreFeature={() => setIsInterestModalOpen(true)}
            />

            {/* 3. Meet Aaralia AI: "Intelligence that works with your people." (Images 2, 3, & 4) */}
            <AISmartSection />

            {/* 4. The Complete HR Suite: "One place for every people operation." (Image 4 bottom) */}
            <HRSuiteSection />

            {/* 5. Operating Layer & Dashboard Showcase with Magnifying Lenses (Image 5) */}
            <DashboardShowcase
              onLaunchFullDashboard={() => setActiveView('dashboard')}
            />
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
