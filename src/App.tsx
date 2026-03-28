import React from 'react'

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>💍 Harusi Smart</h1>
      <p>Welcome to your Wedding Planning PWA</p>
      <button style={{
        background: '#D4AF37',
        color: 'white',
        border: 'none',
        padding: '1rem 2rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        fontWeight: 600
      }}>
        Get Started
      </button>
    </div>
  )
}

export default App