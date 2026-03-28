import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';

export const Navbar: React.FC = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const { user, logout } = useAuth();

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      color: 'white',
      padding: '1rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>💍 {t('common.appName')}</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={toggleLanguage} style={{
            background: 'rgba(212,175,55,0.2)',
            border: '1px solid #D4AF37',
            color: '#D4AF37',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontWeight: 600
          }}>
            {language === 'en' ? '🇬🇧 EN' : '🇹🇿 SW'}
          </button>
          {user && (
            <button onClick={() => logout()} style={{
              background: '#D4AF37',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontWeight: 600
            }}>
              {t('common.logout')}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};