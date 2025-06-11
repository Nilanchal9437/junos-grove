import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import CryptoUpdates from './components/CryptoUpdates';
import AppPreview from './components/AppPreview';
import FeaturesSection from './components/FeaturesSection';
import Leaderboard from './components/Leaderboard';
import NewsletterSignup from './components/NewsletterSignup';
import FAQAccordion from './components/FAQAccordion';
import Footer from './components/Footer';
import jungleBg from './assets/Background2.svg'; // Import your background image
import Navbar from './components/Navbar';
import Home from './page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WatchtowerPage from './page/WatchtowerPage';
import TreasureMapPage from './page/TreasureMapPage';
import Portfolio from './page/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchtower" element={<WatchtowerPage />} />
        <Route path="/treasure-map" element={<TreasureMapPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
