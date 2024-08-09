<template>
  <div class="relative">
    <img
      :src="images[currentImageIndex]"
      :alt="alt"
      class="w-full h-48 object-contain cursor-pointer"
      @click="handleImageClick"
    />
    <button v-if="images.length > 1" @click="prevImage" class="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-1 rounded z-10">‹</button>
    <button v-if="images.length > 1" @click="nextImage" class="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-1 rounded z-10">›</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  images: Array,
  alt: String
});
const emit = defineEmits(['imageClick']);

const currentImageIndex = ref(0);

const handleImageClick = () => {
  emit('imageClick', props.images[currentImageIndex.value]);
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
};
</script>

<style scoped>
.image-carousel img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
