export interface User {
  id: string;
  email: string;
  displayName: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: 'customer' | 'vendor' | 'admin';
  language: 'en' | 'sw';
  city: string;
  verified: boolean;
  createdAt: Date;
}

export interface Vendor {
  id: string;
  businessName: string;
  categories: string[];
  city: string;
  rating: number;
  verified: boolean;
  packages: string[];
}

export interface Booking {
  id: string;
  vendorId: string;
  userId: string;
  status: 'pending' | 'confirmed' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  totalPrice: number;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}