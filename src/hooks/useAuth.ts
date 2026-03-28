import { useState, useEffect } from 'react';
import { auth } from '../config/firebaseConfig';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser: any) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || '',
          firstName: '',
          lastName: '',
          phone: '',
          role: 'customer',
          language: 'en',
          city: '',
          verified: false,
          createdAt: new Date()
        });
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = () => auth.signOut();

  return { user, loading, logout };
};