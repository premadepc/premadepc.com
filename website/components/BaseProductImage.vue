<template>
    <img :src="src" :alt="alt" class="w-full h-full object-contain cursor-pointer" />
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
    src: String,
    alt: String
  });
  </script>
  