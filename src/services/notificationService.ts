import { db } from '../config/firebaseConfig';
import { collection, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';
import { Notification, ApiResponse } from '../types';

class NotificationService {
  async getNotifications(userId: string): Promise<ApiResponse<Notification[]>> {
    try {
      const q = query(collection(db, 'notifications'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const notifications: Notification[] = [];
      querySnapshot.forEach((d: any) => {
        notifications.push({ id: d.id, ...d.data() } as Notification);
      });
      return { success: true, data: notifications };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async markAsRead(notificationId: string): Promise<ApiResponse<null>> {
    try {
      await updateDoc(doc(db, 'notifications', notificationId), { read: true });
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

export default new NotificationService();