import React, { useState } from 'react';

import binanceLogo from '../assets/icon/binance.png';
import metamaskLogo from '../assets/icon/metamask.png';
import coinbaseLogo from '../assets/icon/coinbase.png';
import otherLogo from '../assets/icon/other.png';

export default function LoginModal({ onClose }) {
  const [isSignup, setIsSignup] = useState(false);

  const inputStyle = {
    width: '100%',
    padding: '0.7rem 1rem',
    margin: '0.5rem 0',
    borderRadius: 8,
    border: '1px solid #333',
    background: '#232d28',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const greenButton = {
    width: '100%',
    padding: '0.7rem 1rem',
    borderRadius: 8,
    border: 'none',
    background: 'rgba(153, 227, 158, 1)',
    color: '#222',
    fontWeight: 600,
    fontSize: '1rem',
    marginTop: '1rem',
    cursor: 'pointer',
  };

  const divider = {
    textAlign: 'center',
    color: '#888',
    margin: '1.2rem 0 1rem',
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 1,
    position: 'relative',
  };

  const socialBtn = {
    width: '100%',
    padding: '0.7rem 1rem',
    borderRadius: 8,
    border: '1px solid #444',
    background: '#181f1b',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1rem',
    marginTop: '0.7rem',
    cursor: 'pointer',
  };

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
          background: '#181f1b',
          borderRadius: 18,
          padding: '2.5rem 2.5rem 2rem',
          minWidth: 340,
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          position: 'relative',
          zIndex: 101,
          color: '#fff',
          width: 370,
          maxWidth: '90vw',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'transparent',
            border: 'none',
            fontSize: 22,
            color: '#fff',
            cursor: 'pointer',
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Tab Toggle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 24,
          }}
        >
          <button
            onClick={() => setIsSignup(false)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: 16,
              color: isSignup ? '#666' : '#fff',
              borderBottom: !isSignup ? '2px solid #4ade80' : 'none',
              marginRight: 24,
              paddingBottom: 4,
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'color 0.2s',
            }}
          >
            Log In
          </button>
          <button
            onClick={() => setIsSignup(true)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: 16,
              color: isSignup ? '#fff' : '#666',
              borderBottom: isSignup ? '2px solid #4ade80' : 'none',
              paddingBottom: 4,
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'color 0.2s',
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form>
          {/* {isSignup && (
                <input type="text" placeholder="Name" style={inputStyle} />
              )} */}
          <input type="email" placeholder="user@mail.com" style={inputStyle} />
          {/* <input
                type="password"
                placeholder="Password"
                style={inputStyle}
              /> */}

          <button type="submit" style={greenButton}>
            Continue
          </button>

          <div style={divider}>OR</div>
          <button type="button" style={socialBtn}>
            Continue with Wallet
          </button>
          <button
            type="button"
            style={{
              ...socialBtn,
              border: '1px solid #3b82f6',
              color: '#3b82f6',
            }}
          >
            Continue with Coinbase
          </button>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              marginTop: 16,
            }}
          >
            {['X', 'facebook', 'apple', 'google'].map((provider) => (
              <div
                key={provider}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: '#222',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  color: '#fff',
                  textTransform: 'capitalize',
                }}
              >
                {provider[0].toUpperCase()}
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: 12,
              color: '#888',
              marginTop: 16,
              textAlign: 'center',
            }}
          >
            When you create a CoinStats account, you agree to the{' '}
            <span style={{ color: '#ccc', textDecoration: 'underline' }}>
              Terms
            </span>{' '}
            and{' '}
            <span style={{ color: '#ccc', textDecoration: 'underline' }}>
              Privacy Policy
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
