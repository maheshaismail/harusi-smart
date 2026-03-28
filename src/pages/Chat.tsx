import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useChat } from '../hooks/useChat';
import { Navbar } from '../components/Navbar';

export const Chat: React.FC = () => {
  const { t } = useLanguage();
  const { messages, sendMessage } = useChat();
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text);
      setText('');
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 80px)', background: '#f9f9f9', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1>{String(t('navigation.chat'))}</h1>
          <div style={{ background: 'white', borderRadius: '0.75rem', padding: '1.5rem', height: '500px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ marginBottom: '1rem', padding: '0.75rem', background: '#f0f0f0', borderRadius: '0.5rem' }}>
                  {msg.content}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type message..."
                style={{ flex: 1, padding: '0.75rem', border: '1px solid #ddd', borderRadius: '0.375rem' }}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} style={{
                background: '#D4AF37',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: 600
              }}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};