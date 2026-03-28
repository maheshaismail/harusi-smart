import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';

export const PaymentCheckout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const bookingTotal = 1500000; // Example: 1.5M TSh

  const handlePayment = async () => {
    if (!phoneNumber) {
      alert('Please enter phone number');
      return;
    }

    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      alert('Payment processed! Confirmation sent to ' + phoneNumber);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ color: '#1a1a1a', marginBottom: '2rem', textAlign: 'center' }}>💳 Complete Payment</h1>

          {/* Order Summary */}
          <div style={{
            background: 'white',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#1a1a1a' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid #eee' }}>
              <span style={{ color: '#666' }}>Service Booking</span>
              <strong>{bookingTotal.toLocaleString()} TSh</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>
              <span>Total</span>
              <span style={{ color: '#D4AF37' }}>{bookingTotal.toLocaleString()} TSh</span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div style={{
            background: 'white',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#1a1a1a' }}>Select Payment Method</h3>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => setPaymentMethod('mpesa')}
                style={{
                  flex: 1,
                  padding: '1rem',
                  background: paymentMethod === 'mpesa' ? '#D4AF37' : '#f0f0f0',
                  color: paymentMethod === 'mpesa' ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                📱 M-Pesa
              </button>
              <button
                onClick={() => setPaymentMethod('stripe')}
                style={{
                  flex: 1,
                  padding: '1rem',
                  background: paymentMethod === 'stripe' ? '#D4AF37' : '#f0f0f0',
                  color: paymentMethod === 'stripe' ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                💳 Card
              </button>
            </div>

            {paymentMethod === 'mpesa' && (
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  M-Pesa Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="0xxx xxx xxx"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '0.375rem',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                  }}
                />
                <p style={{ color: '#999', fontSize: '0.9rem', margin: 0 }}>
                  You will receive an M-Pesa prompt on your phone to enter your PIN
                </p>
              </div>
            )}

            {paymentMethod === 'stripe' && (
              <div>
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  You will be redirected to Stripe's secure payment page
                </p>
              </div>
            )}
          </div>

          {/* Confirm Button */}
          <button
            onClick={handlePayment}
            disabled={loading || (paymentMethod === 'mpesa' && !phoneNumber)}
            style={{
              width: '100%',
              padding: '1rem',
              background: loading ? '#ccc' : '#D4AF37',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {loading ? 'Processing...' : `Pay ${bookingTotal.toLocaleString()} TSh`}
          </button>

          {/* Security Note */}
          <p style={{
            textAlign: 'center',
            color: '#999',
            fontSize: '0.85rem',
            marginTop: '1.5rem'
          }}>
            🔒 Your payment is secure and encrypted
          </p>
        </div>
      </div>
    </>
  );
};