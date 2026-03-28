import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { Navbar } from '../components/Navbar';

export const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();
  const { t } = useLanguage();

  if (loading) return <div>{String(t('common.loading'))}</div>;
  if (!user) return <div>Please login</div>;

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: '#f9f9f9', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1>{String(t('navigation.dashboard'))}</h1>
          <p>Welcome, {user.displayName}</p>
        </div>
      </div>
    </>
  );
};