import React, { useState } from 'react';
import faqLeftImg from '../assets/Left.png'; // <-- Add your image path

const faqs = [
  {
    q: "What is Juno's?",
    a: "Juno's is a crypto portfolio and trading platform with advanced features.",
  },
  {
    q: 'How do I create an account?',
    a: 'Click Get Started and follow the registration steps.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes, we use bank-level encryption and security best practices.',
  },
  {
    q: "Can I use Juno's on mobile?",
    a: 'Yes, our app is fully mobile responsive.',
  },
  {
    q: "Does Juno's support multiple wallets?",
    a: 'Yes, you can connect and manage multiple wallets.',
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <section
      style={{
        width: '100%',
        background: 'rgba(10, 30, 25, 0.95)',
        padding: '3rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          // height: '100%',
          background: 'rgb(0 0 0 / 62%)', // Adjust opacity as needed
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      {/* Left PNG */}
      <img
        src={faqLeftImg}
        alt="faq decor"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          zIndex: 0,
          objectFit: 'cover',
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
          Popular{' '}
          <span style={{ color: 'rgba(153, 227, 158, 1)' }}>questions</span>
        </h5>
        <h2 style={{ color: 'white', fontSize: '3rem' }}>
          Learn more about Juno’s
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgb(209 213 219 / 60%)' }}>
          We accept 100+ cryptocurrencies around the world
        </p>
      </div>
      <div
        style={{
          width: '80%',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.7rem',
        }}
      >
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              marginBottom: 12,
              background: 'rgba(20, 40, 35, 1)',
              borderRadius: 20,
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: 'white',
                fontWeight: 600,
                fontSize: '1.1rem',
                padding: '1rem 1.5rem',
                cursor: 'pointer',
                height: '12vh',
                outline: 'none',
                borderBottom:
                  open === i ? '1px solid #4ade80' : '1px solid #222',
                transition: 'border 0.2s',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{faq.q}</span>
              <span
                style={{
                  color: '#4ade80',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                }}
              >
                {open === i ? '-' : '+'}
              </span>
            </button>
            {open === i && (
              <div
                style={{
                  padding: '1rem 1.5rem',
                  color: '#a7f3d0',
                  background: '#1a2a23',
                }}
              >
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
