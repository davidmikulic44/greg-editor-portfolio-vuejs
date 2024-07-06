<template>
  <div class="main-title">
    Stop settling for 
    <span class="highlight" :class="fadeClass">{{ currentText }}</span>
    editor.
    <a href="mailto:gregoredits29@gmail.com" target="_blank" class="get-started">Contact now</a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const textArray = [ "an average", "a mid", "a bad", "a mediocre",];
const currentText = ref(textArray[0]);
const fadeClass = ref('fade-in');

let currentIndex = 0;
const animationDuration = 1500;
const changeInterval = 1300; 

onMounted(() => {
  setInterval(() => {
    fadeClass.value = 'fade-out';
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % textArray.length;
      currentText.value = textArray[currentIndex];
      fadeClass.value = 'fade-in';
    }, animationDuration); 
  }, changeInterval);
});
</script>