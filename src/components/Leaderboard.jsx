import React from 'react';
import waveBackground from '../assets/leadBord.png'; // rename Screenshot 2025-06-03 121433.png to wave-bg.png

export default function SupportSection() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'rgba(10, 30, 25, 0.95)',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'rgb(0 0 0 / 62%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Heading */}
      <div
        style={{
          textAlign: 'center',
          padding: '4rem 1rem 2rem',
          position: 'relative', // required for zIndex to work
          zIndex: 3,
          marginBottom: '2rem',
          // backgroundColor: '#0a1e19',
        }}
      >
        <h5
          style={{ color: '#eaffd0', fontSize: '1rem', marginBottom: '0.5rem' }}
        >
          Always by{' '}
          <span style={{ color: 'rgba(153, 227, 158, 1)' }}>your side</span>
        </h5>
        <h2 style={{ color: 'white', fontSize: '3rem' }}>
          Be the first to use our Junos’s !{' '}
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgb(209 213 219 / 60%)' }}>
          Get faster, safer, more affordable cloud object storage with <br /> no
          centeral point of failure.
        </p>
      </div>

      {/* Fullscreen PNG Background */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          padding: '2rem',
          left: '5',
          right: '5',
          borderRadius: '1rem',
          border: '1px solid white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <img
          src={waveBackground}
          alt="wave"
          style={{
            position: 'relative',
            inset: 0,
            width: '100%',
            height: '90%',
            zIndex: 4,
            opacity: 0.7, // makes the image dull
            pointerEvents: 'none',
            top: '42%',
          }}
        />
      </div>
    </section>
  );
}
