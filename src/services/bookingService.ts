import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';
import { Booking, ApiResponse } from '../types';

class BookingService {
  async createBooking(bookingData: Partial<Booking>): Promise<ApiResponse<Booking>> {
    try {
      const docRef = await addDoc(collection(db, 'bookings'), bookingData);
      return { success: true, data: { id: docRef.id, ...bookingData } as Booking };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async getBookings(userId: string): Promise<ApiResponse<Booking[]>> {
    try {
      const q = query(collection(db, 'bookings'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const bookings: Booking[] = [];
      querySnapshot.forEach((doc: any) => {
        bookings.push({ id: doc.id, ...doc.data() } as Booking);
      });
      return { success: true, data: bookings };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async updateBooking(bookingId: string, updates: Partial<Booking>): Promise<ApiResponse<null>> {
    try {
      await updateDoc(doc(db, 'bookings', bookingId), updates);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

export default new BookingService();