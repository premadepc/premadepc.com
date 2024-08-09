<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Welcome to Nuxt E-Commerce</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in productData" :key="product.id" class="bg-white p-4 rounded-lg shadow-md">
        <ImageCarousel :images="product.images" :alt="product.name" @imageClick="() => navigateToProduct(product.id)" />
        <h2 class="text-xl font-semibold mt-4">{{ product.name }}</h2>
        <p class="mt-2">{{ formatPrice(product.price) }}</p>
        <NuxtLink :to="`/product/${product.id}`" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded inline-block">View Product</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { products } from '@/data/products';
import type { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';
import ImageCarousel from '@/components/ImageCarousel.vue';

const router = useRouter();
const productData: Product[] = products;

const navigateToProduct = (id: number) => {
  router.push(`/product/${id}`);
};
</script>
