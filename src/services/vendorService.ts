import { db } from '../config/firebaseConfig';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { Vendor, ApiResponse } from '../types';

class VendorService {
  async getVendors(): Promise<ApiResponse<Vendor[]>> {
    try {
      const querySnapshot = await getDocs(collection(db, 'vendors'));
      const vendors: Vendor[] = [];
      querySnapshot.forEach((doc: any) => {
        vendors.push({ id: doc.id, ...doc.data() } as Vendor);
      });
      return { success: true, data: vendors };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async getVendor(vendorId: string): Promise<ApiResponse<Vendor>> {
    try {
      const vendorDoc = await getDoc(doc(db, 'vendors', vendorId));
      return { success: true, data: { id: vendorDoc.id, ...vendorDoc.data() } as Vendor };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async searchVendors(searchTerm: string): Promise<ApiResponse<Vendor[]>> {
    try {
      const querySnapshot = await getDocs(collection(db, 'vendors'));
      const vendors: Vendor[] = [];
      querySnapshot.forEach((doc: any) => {
        const vendor = { id: doc.id, ...doc.data() } as Vendor;
        if (vendor.businessName?.toLowerCase().includes(searchTerm.toLowerCase())) {
          vendors.push(vendor);
        }
      });
      return { success: true, data: vendors };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}

export default new VendorService();