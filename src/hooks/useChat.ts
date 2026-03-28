import { useState } from 'react';
import { Message } from '../types';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading] = useState(false);

  const sendMessage = (_text: string) => {
    // Implementation
  };

  return { messages, setMessages, sendMessage, loading };
};