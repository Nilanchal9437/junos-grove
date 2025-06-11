import React, { use, useState } from 'react';
import { FaCog } from 'react-icons/fa'; // FontAwesome settings icon
import logoIcon from '../assets/icon/favicon.ico';
import groupIcon from '../assets/icon/Group.png';
import navIcon from '../assets/icon/Icon.png';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import JunoChatModal from './JunoChatModal';

export default function Navbar() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [junoModalOpen, setJunoModalOpen] = useState(false);
  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 5rem',
          color: 'white',
          background: 'transparent',
          // backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 30,
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
          onClick={() => navigate('/')}
        >
          <img
            src={logoIcon}
            alt="Logo"
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              objectFit: 'cover',
              background: '#4ade80',
            }}
          />
          <span style={{ fontFamily: "'Roboto',  'sans-serif'" }}>Juno’s</span>
        </div>

        {/* Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            fontSize: '0.8rem',
          }}
        >
          {[
            { label: 'Watchtower', path: '/watchtower' },
            { label: 'Juno’s Grove', path: '/junos-grove' },
            { label: 'Treasure Map', path: '/treasure-map' },
            { label: 'Pricing', path: '/' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                cursor: 'pointer',
              }}
              onClick={() =>
                item.label === 'Juno’s Grove'
                  ? setJunoModalOpen(true)
                  : navigate(item.path)
              }
            >
              {item.label}
            </div>
          ))}
          <img
            src={navIcon}
            alt="nav icon"
            style={{
              width: 16,
              height: 16,
              objectFit: 'contain',
              opacity: 0.8,
            }}
          />
        </div>

        {/* Right Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Assets, Wallets, Domains"
            style={{
              padding: '0.5rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'white',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
          <FaCog style={{ cursor: 'pointer', fontSize: '1.1rem' }} />
          <button
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '500',
            }}
          >
            Login
          </button>
          <button
            style={{
              background: 'rgba(153, 227, 158, 1)',
              color: '#1a1a1a',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setModalOpen(true)}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = 'rgba(153, 227, 158, 1)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = 'rgba(153, 227, 158, 1)')
            }
          >
            Get Started
          </button>
          <img
            src={groupIcon}
            alt="groupIcon"
            style={{
              width: 28,
              height: 28,
              objectFit: 'cover',
              background: 'transparent',
            }}
          />
        </div>
      </nav>
      {modalOpen && <LoginModal onClose={() => setModalOpen(false)} />}
      {junoModalOpen && (
        <JunoChatModal onClose={() => setJunoModalOpen(false)} />
      )}
    </>
  );
}
