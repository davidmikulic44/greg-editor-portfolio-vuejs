<template>
  <article class="stat-card">
    <img :src="imageUrl" alt="Social Icon" class="stat-glow stat-img" />
    <div class="stat-info stat-glow">
      <h1 class="stat-card-text">{{ displayText }}</h1>
      <p class="stat-desc">{{ smallText }}</p>
    </div>
  </article>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  bigText: {
    type: String,
    required: true,
  },
  smallText: {
    type: String,
    required: true,
  }
});

const displayText = ref('0');

const animateNumber = (start, end, duration) => {
  const startTime = performance.now();
  const endTime = startTime + duration;

  const update = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const currentNumber = start + (end - start) * progress;
    displayText.value = formatNumber(currentNumber);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayText.value = formatNumber(end);
    }
  };

  requestAnimationFrame(update);
};

const parseNumber = (value) => {
  if (typeof value === 'string') {
    const multiplier = value.includes('B') ? 1e9 : value.includes('M') ? 1e6 : 1;
    const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
    return numericPart * multiplier;
  }
  return parseFloat(value);
};

const formatNumber = (number) => {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(2) + 'B';
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(2) + 'M';
  } else {
    return Math.round(number).toLocaleString();
  }
};

watch(() => props.bigText, (newVal) => {
  const parsedValue = parseNumber(newVal);
  animateNumber(0, parsedValue, 2000);
});

onMounted(() => {
  const parsedValue = parseNumber(props.bigText);
  animateNumber(0, parsedValue, 2000);
});
</script>