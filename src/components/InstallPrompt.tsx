import React, { useEffect, useState } from 'react';

export const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      setShowPrompt(false);
      setDeferredPrompt(null);
    }
  };

  if (!showPrompt) return null;

  return (
    <div style={{
      background: '#D4AF37',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem'
    }}>
      <span>Install Harusi Smart on your device</span>
      <button onClick={handleInstall} style={{
        background: 'white',
        color: '#D4AF37',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        fontWeight: 600,
        cursor: 'pointer'
      }}>
        Install
      </button>
      <button onClick={() => setShowPrompt(false)} style={{
        background: 'transparent',
        color: 'white',
        border: '1px solid white',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        fontWeight: 600,
        cursor: 'pointer'
      }}>
        Later
      </button>
    </div>
  );
};