import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(usdPrice: number, currency: 'USD' | 'EUR' | 'TRY') {
  const rates = {
    USD: 1,
    EUR: 0.92,
    TRY: 32.5
  };
  
  const converted = usdPrice * rates[currency];
  
  return new Intl.NumberFormat(currency === 'TRY' ? 'tr-TR' : 'en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(converted);
}
