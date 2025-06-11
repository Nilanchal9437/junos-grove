import React from 'react';

const features = [
  { icon: '🔒', text: 'Bank-level security' },
  { icon: '📱', text: 'Mobile friendly' },
  { icon: '⚡', text: 'Fast transactions' },
  { icon: '📊', text: 'Detailed analytics' },
  { icon: '🌐', text: 'Global access' },
];

export default function FeaturesSection() {
  return (
    <section style={{
      width: '100%',
      background: 'rgba(10, 30, 25, 0.95)',
      padding: '3rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700, marginBottom: 24 }}>Features of the crypto framer mobile application</h3>
      <ul style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
        {features.map((f, i) => (
          <li key={i} style={{ background: 'rgba(20, 40, 35, 1)', borderRadius: '1rem', padding: '1.5rem 2rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 140, boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }}>
            <span style={{ fontSize: '2rem', marginBottom: 8 }}>{f.icon}</span>
            <span style={{ fontWeight: 500 }}>{f.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
} 