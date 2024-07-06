<template>
    <div class="fixed-icons">
      <SocialIcon imageUrl="/src/assets/svgs/youtube.svg" link="https://www.youtube.com" />
      <SocialIcon imageUrl="/src/assets/svgs/instagram.svg" link="https://www.instagram.com" />
      <SocialIcon imageUrl="/src/assets/svgs/twitter.svg" link="https://www.x.com" />
      <SocialIcon imageUrl="/src/assets/svgs/twitter.svg" link="https://www.x.com" />
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import SocialIcon from '../Header/SocialIcon.vue';

onMounted(() => {
  const icons = document.querySelector('.fixed-icons');
  let lastScrollTop = 0;
  let isScrolling;

  const handleScroll = () => {
    clearTimeout(isScrolling);

    const scrollTop = window.scrollY;
    const scrollDifference = scrollTop - lastScrollTop;

    // Adjust the top position based on scroll direction
    const currentTop = parseInt(getComputedStyle(icons).top, 10) || 0;
    const newTop = currentTop + scrollDifference * 0.2; // Adjust the multiplier as needed
    icons.style.top = `${Math.max(0, newTop)}px`; // Ensure it doesn't go negative

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(() => {
      // Remove previous animation classes
      icons.classList.remove('bounce-down');
      icons.classList.remove('bounce-up');

      // Add bounce animation class based on scroll direction
      if (scrollDifference > 0) {
        icons.classList.add('bounce-down');
      } else {
        icons.classList.add('bounce-up');
      }

      // Remove the animation class after it completes
      setTimeout(() => {
        icons.classList.remove('bounce-down');
        icons.classList.remove('bounce-up');
      }, 500);
    }, 100); // Adjust timeout as needed
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>
