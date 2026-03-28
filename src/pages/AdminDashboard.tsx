import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navbar } from '../components/Navbar';
import { ComingSoonToast } from '../components/ComingSoonToast';

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (user?.role !== 'admin') {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>Access Denied - Admin Only</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ color: '#1a1a1a', marginBottom: '2rem' }}>🛡️ Admin Dashboard</h1>

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
              <h3 style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem', textTransform: 'uppercase' }}>Total Users</h3>
              <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '2rem' }}>1,234</h2>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #4CAF50'
            }}>
              <h3 style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem', textTransform: 'uppercase' }}>Verified Vendors</h3>
              <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '2rem' }}>456</h2>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #2196F3'
            }}>
              <h3 style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem', textTransform: 'uppercase' }}>Total Bookings</h3>
              <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '2rem' }}>789</h2>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #FF9800'
            }}>
              <h3 style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '0.9rem', textTransform: 'uppercase' }}>Pending Vendors</h3>
              <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '2rem' }}>12</h2>
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
              onClick={() => setActiveTab('vendors')}
              style={{
                padding: '1rem',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'vendors' ? '3px solid #D4AF37' : 'none',
                color: activeTab === 'vendors' ? '#D4AF37' : '#999',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Vendor Verification
            </button>
            <button
              onClick={() => setActiveTab('users')}
              style={{
                padding: '1rem',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'users' ? '3px solid #D4AF37' : 'none',
                color: activeTab === 'users' ? '#D4AF37' : '#999',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Users
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <ComingSoonToast message="Admin Overview Dashboard" />
          )}
          {activeTab === 'vendors' && (
            <ComingSoonToast message="Vendor Verification Interface" />
          )}
          {activeTab === 'users' && (
            <ComingSoonToast message="User Management Panel" />
          )}
        </div>
      </div>
    </>
  );
};