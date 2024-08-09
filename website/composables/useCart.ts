import { ref } from 'vue';
import type { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
}

const cart = ref<CartItem[]>([]);

export function useCart() {
  const addToCart = (product: Product, quantity: number) => {
    const existingItem = cart.value.find(item => item.id === product.id);
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity <= product.maxQuantity) {
        existingItem.quantity = newQuantity;
      } else {
        alert(`Cannot add more than ${product.maxQuantity} items.`);
      }
    } else {
      if (quantity <= product.maxQuantity) {
        cart.value.push({ ...product, quantity });
      } else {
        alert(`Cannot add more than ${product.maxQuantity} items.`);
      }
    }
  };

  const removeFromCart = (productId: number) => {
    const itemIndex = cart.value.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
      if (cart.value[itemIndex].quantity > 1) {
        cart.value[itemIndex].quantity -= 1;
      } else {
        cart.value.splice(itemIndex, 1);
      }
    }
  };

  const clearCart = () => {
    cart.value = [];
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart
  };
}
