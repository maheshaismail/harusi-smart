import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../hooks/useAuth';
import { Navbar } from '../components/Navbar';
import { Heart } from 'lucide-react';

export const Favorites: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load favorites from localStorage for demo
    const saved = localStorage.getItem(`favorites_${user?.id}`);
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
    setLoading(false);
  }, [user?.id]);

  const removeFavorite = (vendorId: string) => {
    const updated = favorites.filter(f => f.id !== vendorId);
    setFavorites(updated);
    localStorage.setItem(`favorites_${user?.id}`, JSON.stringify(updated));
  };

  if (loading) return <div>{String(t('common.loading'))}</div>;

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ color: '#1a1a1a', marginBottom: '2rem' }}>❤️ {String(t('navigation.favorites'))}</h1>

          {favorites.length === 0 ? (
            <div style={{
              background: 'white',
              borderRadius: '0.75rem',
              padding: '3rem 2rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <Heart size={48} style={{ color: '#ddd', marginBottom: '1rem' }} />
              <p style={{ color: '#999', fontSize: '1.1rem' }}>No favorites yet. Add vendors to your favorites!</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {favorites.map(vendor => (
                <div
                  key={vendor.id}
                  style={{
                    background: 'white',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    background: '#f0f0f0',
                    height: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999'
                  }}>
                    📸 {vendor.businessName}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#1a1a1a' }}>{vendor.businessName}</h3>
                    <p style={{ margin: '0 0 0.75rem 0', color: '#666', fontSize: '0.9rem' }}>⭐ {vendor.rating.toFixed(1)}</p>
                    <p style={{ margin: '0 0 1rem 0', color: '#999', fontSize: '0.9rem' }}>{vendor.city}</p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button style={{
                        flex: 1,
                        background: '#D4AF37',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}>
                        View
                      </button>
                      <button
                        onClick={() => removeFavorite(vendor.id)}
                        style={{
                          background: '#fee2e2',
                          color: '#FF6B6B',
                          border: 'none',
                          padding: '0.75rem',
                          borderRadius: '0.375rem',
                          cursor: 'pointer',
                          fontWeight: 600
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};