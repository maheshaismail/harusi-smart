import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Navbar } from '../components/Navbar';

export const GuestManager: React.FC = () => {
  const { t } = useLanguage();
  const [guests, setGuests] = useState<any[]>([]);
  const [newGuest, setNewGuest] = useState({ name: '', email: '', phone: '', rsvp: 'pending' });

  const addGuest = () => {
    if (newGuest.name && newGuest.email) {
      setGuests([...guests, { id: Date.now(), ...newGuest }]);
      setNewGuest({ name: '', email: '', phone: '', rsvp: 'pending' });
    }
  };

  const removeGuest = (id: number) => {
    setGuests(guests.filter(g => g.id !== id));
  };

  const updateRSVP = (id: number, rsvp: string) => {
    setGuests(guests.map(g => g.id === id ? { ...g, rsvp } : g));
  };

  const rsvpStats = {
    yes: guests.filter(g => g.rsvp === 'yes').length,
    no: guests.filter(g => g.rsvp === 'no').length,
    maybe: guests.filter(g => g.rsvp === 'maybe').length,
    pending: guests.filter(g => g.rsvp === 'pending').length
  };

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ color: '#1a1a1a', marginBottom: '2rem' }}>👥 {String(t('navigation.guests'))}</h1>

          {/* RSVP Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: '#4CAF50', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>✓ {rsvpStats.yes}</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Attending</p>
            </div>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: '#FFB800', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>? {rsvpStats.maybe}</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Maybe</p>
            </div>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: '#FF6B6B', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>✗ {rsvpStats.no}</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Not Attending</p>
            </div>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: '#999', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>⏳ {rsvpStats.pending}</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Pending</p>
            </div>
          </div>

          {/* Add Guest Form */}
          <div style={{
            background: 'white',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#1a1a1a' }}>Add Guest</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Guest name"
                value={newGuest.name}
                onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.375rem',
                  fontSize: '1rem'
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={newGuest.email}
                onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.375rem',
                  fontSize: '1rem'
                }}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={newGuest.phone}
                onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.375rem',
                  fontSize: '1rem'
                }}
              />
              <button
                onClick={addGuest}
                style={{
                  background: '#D4AF37',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Add Guest
              </button>
            </div>
          </div>

          {/* Guests List */}
          <div style={{
            background: 'white',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#1a1a1a' }}>Guest List ({guests.length})</h3>
            {guests.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center' }}>No guests added yet</p>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #eee' }}>
                      <th style={{ textAlign: 'left', padding: '1rem', color: '#666', fontWeight: 600 }}>Name</th>
                      <th style={{ textAlign: 'left', padding: '1rem', color: '#666', fontWeight: 600 }}>Email</th>
                      <th style={{ textAlign: 'left', padding: '1rem', color: '#666', fontWeight: 600 }}>Phone</th>
                      <th style={{ textAlign: 'left', padding: '1rem', color: '#666', fontWeight: 600 }}>RSVP</th>
                      <th style={{ textAlign: 'left', padding: '1rem', color: '#666', fontWeight: 600 }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map(guest => (
                      <tr key={guest.id} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '1rem', color: '#333' }}>{guest.name}</td>
                        <td style={{ padding: '1rem', color: '#666', fontSize: '0.9rem' }}>{guest.email}</td>
                        <td style={{ padding: '1rem', color: '#666', fontSize: '0.9rem' }}>{guest.phone}</td>
                        <td style={{ padding: '1rem' }}>
                          <select
                            value={guest.rsvp}
                            onChange={(e) => updateRSVP(guest.id, e.target.value)}
                            style={{
                              padding: '0.5rem',
                              border: '1px solid #ddd',
                              borderRadius: '0.25rem',
                              fontSize: '0.9rem'
                            }}
                          >
                            <option value="pending">Pending</option>
                            <option value="yes">Yes</option>
                            <option value="maybe">Maybe</option>
                            <option value="no">No</option>
                          </select>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <button
                            onClick={() => removeGuest(guest.id)}
                            style={{
                              background: '#fee2e2',
                              color: '#FF6B6B',
                              border: 'none',
                              padding: '0.5rem 1rem',
                              borderRadius: '0.25rem',
                              cursor: 'pointer',
                              fontSize: '0.9rem'
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};