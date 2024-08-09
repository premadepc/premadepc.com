<!-- pages/checkout.vue -->
<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Checkout</h1>
    <div v-if="cart.length > 0">
      <div v-for="item in cart" :key="item.id" class="bg-white p-4 rounded-lg shadow-md mb-4 flex">
        <nuxt-link :to="`/product/${item.id}`" class="w-24 h-24 flex-shrink-0 mr-4">
          <img :src="item.images[0]" :alt="item.name" class="product-image cursor-pointer w-full h-full object-cover">
        </nuxt-link>
        <div>
          <nuxt-link :to="`/product/${item.id}`" class="text-xl font-semibold block">{{ item.name }}</nuxt-link>
          <p class="mt-2">{{ formatPrice(item.price) }} x {{ item.quantity }}</p>
          <p class="mt-2 font-bold">{{ formatPrice(item.price * item.quantity) }}</p>
        </div>
      </div>
      <div class="mt-6">
        <p class="text-2xl font-bold">Total: {{ formatPrice(cartTotal) }}</p>
        <BaseButton @click="completeCheckout" type="primary">Complete Purchase</BaseButton>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCart } from '@/composables/useCart';
import { formatPrice } from '@/utils/formatPrice';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';
import { products } from '@/data/products';

const { cart, clearCart } = useCart();
const router = useRouter();

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0);
});

const completeCheckout = () => {
  // Update product quantities
  cart.value.forEach(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    if (product) {
      product.maxQuantity -= cartItem.quantity;
    }
  });

  // Clear the cart
  clearCart();

  // Complete purchase
  alert('Purchase complete!');
  router.push('/');
};
</script>

<style scoped>
.product-image {
  object-fit: contain;
}
</style>
