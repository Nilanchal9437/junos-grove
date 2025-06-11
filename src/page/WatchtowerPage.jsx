import React from 'react';
import WatchTowerHeroSection from '../components/WatchTowerHeroSection';
import CoinPreview from '../components/CoinPreview';
import CryptoOverviewSection from '../components/CryptoOverviewSection';
import FAQAccordion from '../components/FAQAccordion';

function WatchtowerPage() {
  return (
    <div
      style={{
        minHeight: '113vh',
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
      <WatchTowerHeroSection />
      <CoinPreview />
      <CryptoOverviewSection />
      <FAQAccordion />
    </div>
  );
}

export default WatchtowerPage;
