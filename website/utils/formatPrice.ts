// utils/formatPrice.ts
export function formatPrice(value: number): string {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
  