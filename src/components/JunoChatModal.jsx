import React from 'react';
import leftImage from '../assets/Left.png';
import rightImage from '../assets/Right.png';

export default function JunoChatModal({ onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.7)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '60vw',
          height: '80vh',
          // minWidth: 340,
          // maxWidth: 600,
          backgroundColor: '#11261f',
          borderRadius: 16,
          padding: '2rem',
          zIndex: 1,
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          color: '#fff',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Left Background Image */}
        <img
          src={leftImage}
          alt="left"
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            height: '100%',
            zIndex: 0,
            opacity: 0.25,
            pointerEvents: 'none',
          }}
        />
        {/* Right Background Image */}
        <img
          src={rightImage}
          alt="right"
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            height: '100%',
            zIndex: 0,
            opacity: 0.25,
            pointerEvents: 'none',
          }}
        />
        {/* Modal Content */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: '6.5rem' }}>
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
            }}
          >
            🌿 Juno Chat Welcome to Juno’s Grove
          </h2>

          {/* Full Prompt Input Area */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '6.5rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              background: '#1b3129',
              border: '1px solid #2e4239',
              borderRadius: '12px',
              paddingLeft: '2.75rem', // space for globe icon
              paddingRight: '7rem', // space for icons on right
            }}
          >
            {/* 🌐 Globe Icon */}
            <span
              style={{
                position: 'absolute',
                left: '1rem',
                color: '#89a29c',
                fontSize: '1.2rem',
              }}
            >
              🌐
            </span>

            {/* Input field */}
            <input
              type="text"
              placeholder="Type your prompt here"
              style={{
                flex: 1,
                padding: '1rem 0',
                fontSize: '1rem',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                color: '#fff',
              }}
            />

            {/* Right-side icons */}
            <div
              style={{
                position: 'absolute',
                right: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              {/* Gemini 2.0 Flash Tag */}
              <span
                style={{
                  backgroundColor: '#1e3a2f',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '6px',
                  color: '#90ee90',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                💠 Gemini 2.0 Flash
              </span>

              {/* Magic Wand Icon */}
              <span
                style={{
                  color: '#fff',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                }}
              >
                ✨
              </span>

              {/* Send Icon */}
              <button
                style={{
                  background: '#2e4239',
                  border: 'none',
                  borderRadius: '50%',
                  width: '2.5rem',
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#fff',
                  fontSize: '1.1rem',
                }}
              >
                ➤
              </button>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
            }}
          >
            {[
              'get deep research insights',
              'research with web',
              'chat with documents',
              'make charts, diagrams and apps',
              'analyse data',
              'generate image',
              'solve',
            ].map((btn, idx) => (
              <button
                key={idx}
                style={{
                  padding: '0.6rem 1rem',
                  background: '#fff',
                  color: 'rgb(0 0 0 / 64%)',
                  borderRadius: 8,
                  border: 'none',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
