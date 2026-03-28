import { useState, useEffect } from 'react';
import { Vendor } from '../types';

export const useRecommendations = () => {
  const [recommendations] = useState<Vendor[]>([]);
  const [loading] = useState(false);

  useEffect(() => {
    // Load recommendations
  }, []);

  return { recommendations, loading };
};