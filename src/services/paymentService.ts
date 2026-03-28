import { httpsCallable } from 'firebase/functions';
import { functions } from '../config/firebaseConfig';
import { ApiResponse } from '../types';

class PaymentService {
  async initiateMpesaPayment(data: any): Promise<ApiResponse<any>> {
    try {
      const initiateSTKPush = httpsCallable(functions, 'initiateSTKPush');
      const result = await initiateSTKPush(data);
      return { success: true, data: result.data };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async initiateStripePayment(data: any): Promise<ApiResponse<any>> {
    try {
      const createCheckout = httpsCallable(functions, 'createStripeCheckoutSession');
      const result = await createCheckout(data);
      return { success: true, data: result.data };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

export default new PaymentService();