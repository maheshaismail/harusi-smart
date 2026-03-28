import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export const LanguageToggle: React.FC = () => {
  const { toggleLanguage, language } = useLanguage();

  return (
    <button onClick={toggleLanguage} style={{
      padding: '0.5rem 1rem',
      background: '#D4AF37',
      color: 'white',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      fontWeight: 600,
      fontSize: '0.9rem'
    }}>
      {language === 'en' ? '🇬🇧 English' : '🇹🇿 Swahili'}
    </button>
  );
};