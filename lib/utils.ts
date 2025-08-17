import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SKU Utility Functions
export function generateCustomSku(sellerId: string, productName: string, timestamp?: number): string {
  const time = timestamp || Date.now();
  const namePrefix = productName
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .substring(0, 3);
  const sellerPrefix = sellerId.substring(0, 3).toUpperCase();
  const timeSuffix = time.toString().slice(-6);
  
  return `${sellerPrefix}-${namePrefix}-${timeSuffix}`;
}

export function validateCustomSku(sku: string): { isValid: boolean; error?: string } {
  // SKU format: XXX-XXX-XXXXXX (3 letters, 3 letters, 6 digits)
  const skuPattern = /^[A-Z0-9]{3}-[A-Z0-9]{3}-[0-9]{6}$/;
  
  if (!sku) {
    return { isValid: false, error: 'SKU is required' };
  }
  
  if (sku.length > 20) {
    return { isValid: false, error: 'SKU must be 20 characters or less' };
  }
  
  if (!skuPattern.test(sku)) {
    return { isValid: false, error: 'SKU format should be XXX-XXX-XXXXXX (letters/numbers-letters/numbers-6 digits)' };
  }
  
  return { isValid: true };
}

export function formatSkuForDisplay(sku: string): string {
  return sku.toUpperCase();
}
