import { database } from '../config/firebaseConfig';
import { ref, set, push, get } from 'firebase/database';
import { ApiResponse, Message } from '../types';

class ChatService {
  async sendMessage(chatId: string, senderId: string, text: string): Promise<ApiResponse<any>> {
    try {
      const messageRef = push(ref(database, `chats/${chatId}/messages`));
      await set(messageRef, {
        senderId,
        text,
        sentAt: new Date().toISOString(),
        read: false
      });
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async getMessages(chatId: string): Promise<ApiResponse<Message[]>> {
    try {
      const snapshot = await get(ref(database, `chats/${chatId}/messages`));
      const messages: Message[] = [];
      snapshot.forEach((child: any) => {
        messages.push({ id: child.key, ...child.val() });
      });
      return { success: true, data: messages };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

export default new ChatService();