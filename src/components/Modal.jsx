import React from 'react';

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
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
        {children}
      </div>
    </div>
  );
}
