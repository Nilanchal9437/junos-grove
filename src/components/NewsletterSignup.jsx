import React from 'react';

export default function NewsletterSignup() {
  return (
    <section style={{
      width: '100%',
      background: 'rgba(10, 30, 25, 0.95)',
      padding: '3rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700, marginBottom: 16 }}>Be the first to use our Juno's !</h3>
      <form style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(20, 40, 35, 1)', padding: '1.5rem 2rem', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            background: '#222',
            color: 'white',
            minWidth: 220,
          }}
        />
        <button type="submit" style={{ background: '#4ade80', color: 'black', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>Notify Me</button>
      </form>
    </section>
  );
} 