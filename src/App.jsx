import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardShowcase from './components/DashboardShowcase';
import FeatureCards from './components/FeatureCards';
import AISmartSection from './components/AISmartSection';
import HRSuiteSection from './components/HRSuiteSection';
import SupportSystemSection from './components/SupportSystemSection';
import AdminDashboard from './components/AdminDashboard';
import ShowInterestModal from './components/ShowInterestModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import Footer from './components/Footer';

function App() {
  const [activeView, setActiveView] = useState('landing'); // 'landing' | 'dashboard'
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="app-root">
      {activeView === 'landing' ? (
        <>
          {/* Top Clean Header matching design with Hamburger icon on right */}
          <Navbar
            activeView={activeView}
            setActiveView={setActiveView}
            onOpenDemo={() => setIsInterestModalOpen(true)}
            onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
          />

          <main id="main-content">
            {/* 1. Main Hero: "Work gets better when everything works together." */}
            <Hero onShowInterest={() => setIsInterestModalOpen(true)} />

            {/* 2. DBD Showcase right after Hero: "Twin DBDscreens with focusing different areas" */}
            <DashboardShowcase
              onLaunchFullDashboard={() => setActiveView('dashboard')}
            />

            {/* 3. Platform Core Solutions: "Less switching. More moving forward." */}
            <FeatureCards
              onExploreFeature={() => setIsInterestModalOpen(true)}
            />

            {/* 4. Meet Aaralia AI: "Intelligence that works with your people." (Center-aligned 4 pointers) */}
            <AISmartSection />

            {/* 5. The Complete HR Suite: "One place for every people operation." (3x3 grid of 9 cards) */}
            <HRSuiteSection />

            {/* 6. Human Support Tech: "Technology should feel less like a system —and more like support." */}
            <SupportSystemSection />
          </main>

          {/* Footer with Links and Demo CTA */}
          <Footer
            onOpenDemoModal={() => setIsInterestModalOpen(true)}
            onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
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
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
      />

      {/* Official Aaralia Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default App;
