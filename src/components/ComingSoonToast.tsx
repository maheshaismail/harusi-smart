import React from 'react';

export const ComingSoonToast: React.FC<{ message?: string }> = ({ message = 'Coming Soon!' }) => (
  <div style={{
    background: 'linear-gradient(135deg, #fffbe8 0%, #fffdf2 100%)',
    color: '#775c10',
    padding: '1.25rem 1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #e1c96f',
    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.2)',
    maxWidth: '400px',
    margin: '2rem auto',
    textAlign: 'center'
  }}>
    <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>🚧</div>
    <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.05rem', fontWeight: 700 }}>Coming Soon!</h3>
    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>{message}</p>
  </div>
);