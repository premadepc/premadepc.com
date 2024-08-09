<!-- layouts/default.vue -->
<template>
  <div>
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <nuxt-link to="/" class="text-white hover:underline text-2xl font-bold">Premade PCs</nuxt-link>
        <div class="flex items-center space-x-4 mt-2 md:mt-0">
          <nuxt-link to="/cart" class="relative text-white hover:underline flex items-center">
            <div class="relative flex items-center">
              <ShoppingCartIcon class="w-6 h-6"/>
              <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{{ cartCount }}</span>
            </div>
            <span class="ml-2">Cart</span>
          </nuxt-link>
          <!-- <div v-if="isAuthenticated()" class="flex items-center space-x-4">
            <span class="text-white">{{ user?.username }}</span>
            <button @click="logout" class="text-white hover:underline">Logout</button>
          </div> -->
          <!-- <div v-else class="flex items-center space-x-4">
            <nuxt-link to="/login" class="text-white hover:underline">Login</nuxt-link>
            <nuxt-link to="/register" class="text-white hover:underline">Register</nuxt-link>
          </div> -->
        </div>
      </div>
    </header>
    <main class="container mx-auto my-8">
      <nuxt-page />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import { computed } from 'vue';
// import { useAuth } from '@/composables/useAuth';
import { useCart } from '@/composables/useCart';
import { ShoppingCartIcon } from '@heroicons/vue/24/outline';

// const { user, isAuthenticated, logout } = useAuth();
const { cart } = useCart();

const cartCount = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0);
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
