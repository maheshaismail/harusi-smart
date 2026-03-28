import { auth } from '../config/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { ApiResponse } from '../types';

class AuthService {
  async login(email: string, password: string): Promise<ApiResponse<any>> {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true, message: 'Login successful' };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async register(email: string, password: string): Promise<ApiResponse<any>> {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return { success: true, message: 'Registration successful' };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async logout(): Promise<ApiResponse<null>> {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

export default new AuthService();