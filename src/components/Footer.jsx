import React from 'react';
import footerImage from '../assets/footer.png';
import logo from '../assets/icon/favicon.ico';
import insta from '../assets/icon/insta.png';
import facebook from '../assets/icon/facebook.png';
import twiter from '../assets/icon/twiter.png';
import googlePlay from '../assets/icon/GooglePlay.png';
import apple from '../assets/icon/Applelogo.png';

export default function Footer() {
  return (
    <footer
      style={{
        color: '#ccc',
        padding: '4rem 2rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        background: '#101a17', // fallback color
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'rgb(0 0 0 / 60%)', // Adjust opacity as needed
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      {/* Background image */}
      <img
        src={footerImage}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '61%',
          zIndex: 4,
          opacity: 0.7, // makes the image dull
          pointerEvents: 'none',
          top: '42%',
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,30,25,0.85)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '3rem',
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          padding: '4rem 2rem 2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Side: Logo, Description, Socials */}
        <div style={{ flex: '1 1 300px', minWidth: 250, textAlign: 'left' }}>
          <img src={logo} alt="Logo" style={{ width: 40, marginBottom: 16 }} />
          <p style={{ maxWidth: 450 }}>
            Transform your crypto business with Juno’s Framer, a template for
            startups and blockchain services.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <img src={insta} alt="Instagram" style={{ width: 32 }} />
            <img src={facebook} alt="Facebook" style={{ width: 32 }} />
            <img src={twiter} alt="X" style={{ width: 32 }} />
          </div>
        </div>
        {/* Right Side: Links and App Download */}
        <div
          style={{
            flex: '2 1 500px',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '4rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
              <li>Features</li>
              <li>Benefits</li>
              <li>Services</li>
              <li>Why Juno’s</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>
              Other Pages
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
              <li>Error 404</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>
              Download app
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 12,
                background: '#ffffff5e',
                padding: 7,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              <img
                src={googlePlay}
                alt="Google Play"
                style={{ marginBottom: 12 }}
              />
              <div
                style={{
                  fontSize: '0.5rem',
                  color: '#ccc',
                  marginBottom: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                GET IN ON{' '}
                <span style={{ color: 'rgb(255 255 255)', fontSize: '1.0rem' }}>
                  Google Play
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 12,
                background: '#ffffff5e',
                padding: 7,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={apple} alt="Google Play" style={{ marginBottom: 12 }} />
              <div
                style={{
                  fontSize: '0.5rem',
                  color: '#ccc',
                  marginBottom: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                Download on the{' '}
                <span style={{ color: 'rgb(255 255 255)', fontSize: '1.0rem' }}>
                  App Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div
        style={{
          textAlign: 'center',
          marginTop: 48,
          color: 'rgb(244 232 232)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        Copyright ©2025 Juno’s. All rights reserved
      </div>
    </footer>
  );
}
