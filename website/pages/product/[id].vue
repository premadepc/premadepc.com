<template>
  <div v-if="product">
    <h1 class="text-3xl font-bold mb-6">{{ product.name }}</h1>
    <div class="flex space-x-4 mb-4">
      <ImageCarousel :images="product.images" :alt="product.name" @imageClick="showImageInModal" />
    </div>
    <p class="text-lg">{{ product.description }}</p>
    <p class="text-2xl font-bold mt-4">{{ formatPrice(product.price) }}</p>
    <p class="text-lg mt-2">Available Quantity: {{ product.maxQuantity }}</p>
    <div class="mt-4 flex items-center space-x-2">
      <label for="quantity" class="text-lg">Quantity:</label>
      <input
        id="quantity"
        type="number"
        v-model.number="quantity"
        :max="product.maxQuantity"
        min="1"
        class="w-20 p-2 border rounded"
      />
    </div>
    <button
      @click="handleAddToCart"
      :class="{'bg-green-500': isAdded, 'bg-blue-500': !isAdded}"
      class="mt-4 text-white py-2 px-4 rounded"
      :disabled="isAdded"
      aria-label="Add to Cart"
    >
      {{ isAdded ? 'Added to Cart' : 'Add to Cart' }}
    </button>

    <!-- Image Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" @click.self="closeModal">
      <div class="bg-white p-4 rounded-lg max-w-3xl max-h-full overflow-auto relative">
        <button @click="closeModal" class="text-black text-2xl absolute top-2 right-2 z-10">&times;</button>
        <button v-if="product.images.length > 1" @click="prevImage" class="text-black text-2xl absolute top-1/2 left-2 transform -translate-y-1/2 z-10">&lt;</button>
        <button v-if="product.images.length > 1" @click="nextImage" class="text-black text-2xl absolute top-1/2 right-2 transform -translate-y-1/2 z-10">&gt;</button>
        <img :src="currentImage" :alt="product.name" class="w-full h-auto object-contain">
      </div>
    </div>
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { products } from '@/data/products';
import type { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';
import { useCart } from '@/composables/useCart';
import ImageCarousel from '@/components/ImageCarousel.vue';

const route = useRoute();
const { addToCart, cart } = useCart();
const product = ref<Product | null>(null);
const isAdded = ref(false);
const quantity = ref(1);
const isModalOpen = ref(false);
const currentImageIndex = ref(0);

onMounted(() => {
  const productId = Number(route.params.id);
  product.value = products.find(p => p.id === productId) || null;
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

const handleAddToCart = () => {
  if (product.value) {
    const existingItem = cart.value.find(item => item.id === product.value!.id);
    const totalQuantity = existingItem ? existingItem.quantity + quantity.value : quantity.value;

    if (totalQuantity <= product.value.maxQuantity) {
      addToCart(product.value, quantity.value);
      isAdded.value = true;
      setTimeout(() => {
        isAdded.value = false;
      }, 3000); // Reset after 3 seconds
    } else {
      alert(`Cannot add more than ${product.value.maxQuantity} items.`);
    }
  }
};

const showImageInModal = (image: string) => {
  currentImageIndex.value = product.value!.images.indexOf(image);
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const prevImage = () => {
  if (product.value) {
    currentImageIndex.value = (currentImageIndex.value - 1 + product.value.images.length) % product.value.images.length;
  }
};

const nextImage = () => {
  if (product.value) {
    currentImageIndex.value = (currentImageIndex.value + 1) % product.value.images.length;
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (isModalOpen.value) {
    if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'Escape') {
      closeModal();
    }
  }
};

const currentImage = computed(() => {
  if (product.value && isModalOpen.value) {
    return product.value.images[currentImageIndex.value];
  }
  return product?.value?.images[0];
});
</script>

<style scoped>
.product-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.modal img {
  max-width: 100%;
  max-height: 100%;
}
</style>
