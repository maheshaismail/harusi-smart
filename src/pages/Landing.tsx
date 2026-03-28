import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Navbar } from '../components/Navbar';

export const Landing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#1a1a1a', marginBottom: '1rem' }}>💍 {String(t('common.appName'))}</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
            Mobile-first PWA for Tanzanian Wedding Planning & Vendor Marketplace
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: '#D4AF37',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Get Started
            </button>
            <button style={{
              background: 'white',
              color: '#D4AF37',
              border: '2px solid #D4AF37',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};