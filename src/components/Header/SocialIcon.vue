<template>
  <a :href="link" class="social-icon" target="_blank">
    <img :src="imageUrl" alt="Social Icon" class="icon" />
  </a>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>