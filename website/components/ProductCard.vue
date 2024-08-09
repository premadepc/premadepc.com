<!-- components/ProductCard.vue -->
<template>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <img :src="product.images[0]" :alt="product.name" class="w-full h-48 object-cover rounded-t-lg">
      <h2 class="text-xl font-semibold mt-4">{{ product.name }}</h2>
      <p class="mt-2">{{ product.description }}</p>
      <p class="mt-2 text-lg font-bold">{{ formatPrice(product.price) }}</p>
      <NuxtLink :to="`/product/${product.id}`" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded inline-block">View Details</NuxtLink>
    </div>
  </template>
  
  <script setup lang="ts">
  import { formatPrice } from '@/utils/formatPrice';
  import type { Product } from '@/types/product';
  
  const props = defineProps<{
    product: Product
  }>();
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  