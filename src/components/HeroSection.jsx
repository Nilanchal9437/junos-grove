import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import jungleBg from '../assets/Background3.svg';
import leftImage from '../assets/Left.png';
import rightImage from '../assets/Right.png';
import footerImage from '../assets/footer.png';
import Navbar from './Navbar';
import WalletConnectModal from './WalletConnectModal';

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`hero-bg${animate ? ' hero-animate' : ''}`}
        style={{ backgroundImage: `url(${jungleBg})` }}
      >
        <Navbar />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'rgb(0 0 0 / 52%)', // Adjust opacity as needed
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        {/* Left overlay image */}
        <img src={leftImage} alt="Left Decoration" className="hero-img-left" />
        {/* Right overlay image */}
        <img
          src={rightImage}
          alt="Right Decoration"
          className="hero-img-right"
        />
        {/* Footer overlay image */}
        <img
          src={footerImage}
          alt="Footer Decoration"
          className="hero-img-footer"
        />

        {/* Hero Content */}
        <div style={{ zIndex: 30, position: 'relative', width: '100%' }}>
          <h1 className="hero-heading" style={{ fontFamily: 'Valky, serif' }}>
            Conquer the Jungle
          </h1>
          <div className="hero-subheading">
            A tour or cruise of the Amazon Rainforest is a sublime journey into
            the heart of the most biodiverse <br /> place on the planet. Amazon
            lodges, such as La Selva Lodge in Ecuador.
          </div>
          <div className="hero-btn-row">
            <div className="hero-btn-row">
              <div className="hero-btn-row-item juno-btn-wrapper">
                <div className="juno-btn-bg"></div>
                <button className="juno-btn-content">
                  <span className="hero-btn-label">Treasure Map</span>
                  <span className="hero-btn-arrow">→</span>
                </button>
              </div>
              <div className="hero-btn-row-item juno-btn-wrapper">
                <div className="juno-btn-bg"></div>
                <button className="juno-btn-content">
                  <span className="hero-btn-label">Juno's Grove</span>
                  <span className="hero-btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
          <button
            className="hero-connect-btn"
            onClick={() => setShowModal(true)}
            style={{ padding: '0.5rem 1.9rem', fontSize: '1.2rem' }}
          >
            Connect Portfolio
          </button>
        </div>
      </div>
      {showModal && <WalletConnectModal onClose={() => setShowModal(false)} />}
    </>
  );
}
