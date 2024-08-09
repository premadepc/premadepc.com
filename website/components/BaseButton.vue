<!-- components/BaseButton.vue -->
<template>
    <button :class="buttonClass" @click="onClick">
      <slot />
    </button>
  </template>
  
  <script setup lang="ts">
  
  const props = defineProps<{
    type?: 'primary' | 'secondary',
    onClick?: () => void
  }>();
  
  const buttonClass = computed(() => {
    return props.type === 'primary'
      ? 'bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
      : 'bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600';
  });
  
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  