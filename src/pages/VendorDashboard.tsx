import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';
import { Navbar } from '../components/Navbar';
import { ComingSoonToast } from '../components/ComingSoonToast';

export const VendorDashboard: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (user?.role !== 'vendor') {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Access Denied - Vendors Only</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ color: '#1a1a1a', marginBottom: '2rem' }}>📊 {String(t('vendor.vendorDashboard'))}</h1>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #D4AF37'
            }}>
              <h3 style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem', textTransform: 'uppercase' }}>Total Bookings</h3>
              <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '2rem' }}>45</h2>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #4CAF50'
            }}>
              <h3 style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem', textTransform: 'uppercase' }}>Confirmed</h3>
              <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '2rem' }}>35</h2>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #2196F3'
            }}>
              <h3 style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem', textTransform: 'uppercase' }}>Total Earnings</h3>
              <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '2rem' }}>12.5M</h2>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #FFB800'
            }}>
              <h3 style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem', textTransform: 'uppercase' }}>Rating</h3>
              <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '2rem' }}>4.8 ⭐</h2>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #ddd' }}>
            <button
              onClick={() => setActiveTab('overview')}
              style={{
                padding: '1rem',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'overview' ? '3px solid #D4AF37' : 'none',
                color: activeTab === 'overview' ? '#D4AF37' : '#999',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              style={{
                padding: '1rem',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'bookings' ? '3px solid #D4AF37' : 'none',
                color: activeTab === 'bookings' ? '#D4AF37' : '#999',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              style={{
                padding: '1rem',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'earnings' ? '3px solid #D4AF37' : 'none',
                color: activeTab === 'earnings' ? '#D4AF37' : '#999',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Earnings
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <ComingSoonToast message="Vendor Overview Dashboard" />
          )}
          {activeTab === 'bookings' && (
            <ComingSoonToast message="Bookings Management" />
          )}
          {activeTab === 'earnings' && (
            <ComingSoonToast message="Earnings Analytics" />
          )}
        </div>
      </div>
    </>
  );
};