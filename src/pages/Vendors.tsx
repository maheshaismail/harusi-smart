import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Navbar } from '../components/Navbar';
import vendorService from '../services/vendorService';
import { Vendor } from '../types';

export const Vendors: React.FC = () => {
  const { t } = useLanguage();
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVendors();
  }, []);

  const loadVendors = async () => {
    const response = await vendorService.getVendors();
    if (response.success) {
      setVendors(response.data || []);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: '#f9f9f9', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1>{String(t('navigation.vendors'))}</h1>
          {loading ? (
            <p>{String(t('common.loading'))}</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {vendors.map((vendor) => (
                <div key={vendor.id} style={{
                  background: 'white',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <h3>{vendor.businessName}</h3>
                  <p>⭐ {vendor.rating.toFixed(1)}</p>
                  <p>{vendor.city}</p>
                  {vendor.verified && <span style={{background: '#4CAF50', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.8rem'}}>✓ Verified</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};