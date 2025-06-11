import React from 'react';
import HeroSection from '../components/HeroSection';
import CryptoUpdates from '../components/CryptoUpdates';
import Leaderboard from '../components/Leaderboard';
import AppPreview from '../components/AppPreview';
import FAQAccordion from '../components/FAQAccordion';

function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        background: 'rgba(5, 23, 20, 1)',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HeroSection />
      <CryptoUpdates />
      <AppPreview />
      <Leaderboard />
      <FAQAccordion />
    </div>
  );
}

export default Home;
