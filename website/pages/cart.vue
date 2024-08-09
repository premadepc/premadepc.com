<!-- pages/cart.vue -->
<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>
    <div v-if="cart.length > 0">
      <div v-for="item in cart" :key="item.id" class="bg-white p-4 rounded-lg shadow-md mb-4 flex">
        <nuxt-link :to="`/product/${item.id}`" class="w-24 h-24 flex-shrink-0 mr-4">
          <img :src="item.images[0]" :alt="item.name" class=".product-image-auto-height cursor-pointer w-full h-full object-cover">
        </nuxt-link>
        <div>
          <nuxt-link :to="`/product/${item.id}`" class="text-xl font-semibold block">{{ item.name }}</nuxt-link>
          <p class="mt-2">{{ formatPrice(item.price) }} x {{ item.quantity }}</p>
          <p class="mt-2 font-bold">{{ formatPrice(item.price * item.quantity) }}</p>
          <div class="mt-2 flex space-x-2">
            <BaseButton @click="() => removeFromCart(item.id)" type="secondary">Remove</BaseButton>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <p class="text-2xl font-bold">Total: {{ formatPrice(cartTotal) }}</p>
        <NuxtLink to="/checkout" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded inline-block">Proceed to Checkout</NuxtLink>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCart } from '@/composables/useCart';
import { formatPrice } from '@/utils/formatPrice';
import BaseButton from '@/components/BaseButton.vue';

const { cart, removeFromCart } = useCart();

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0);
});
</script>
