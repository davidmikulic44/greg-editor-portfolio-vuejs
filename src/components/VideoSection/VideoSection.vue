<template>
    <section class="clients">
        <h1 class="clients-title">Featured videos</h1>
        <div class="clients-grid">
            <VideoCard
                v-for="(video, index) in [...videos]"
                :key="`${video.youtubeVideoLink}-${index}`"
                class="slide"
                :youtubeVideoLink="video.youtubeVideoLink"
                :thumbnail="video.thumbnail"
                :profileImage="video.profileImage"
                :title="video.title"
                :viewCount="video.viewCount"
                :channelName="video.channelName"
            />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import VideoCard from "./VideoCard.vue"; // Import your VideoCard component
import { videos } from "./videos.js"; // Import your videos data
import ArrowRight from "/src/assets/icons/ArrowRight.vue";
import ArrowLeft from "/src/assets/icons/ArrowLeft.vue";

const currentIndex = ref(0);
const translateValue = ref(0);
const cardWidth = 300 + 16; // Width of each card (300px) plus the gap (1rem = 16px)
const totalWidth = cardWidth * videos.length; // Total width of the slider
let autoScrollInterval = null;
let autoScrollTimeout = null;

videos.sort((a, b) => b.viewCount - a.viewCount);

const prevSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
        translateValue.value = currentIndex.value * cardWidth;
    } else {
        currentIndex.value = videos.length - 1; // Loop back to the end
        translateValue.value = currentIndex.value * cardWidth;
    }
};

const nextSlide = () => {
    if (currentIndex.value < videos.length - 1) {
        currentIndex.value++;
        translateValue.value = currentIndex.value * cardWidth;
    } else {
        currentIndex.value = 0; // Loop back to the start
        translateValue.value = 0;
    }
};

const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
        translateValue.value += 0.5; // Adjust speed of autoscroll as needed
        if (translateValue.value >= totalWidth) {
            translateValue.value = 0;
        }
    }, 16); // Adjust interval as needed for smooth scrolling (60 FPS)
};

const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
    clearTimeout(autoScrollTimeout);
};

onMounted(() => {
    startAutoScroll(); // Start autoscroll when component mounts
});

onBeforeUnmount(() => {
    stopAutoScroll(); // Cleanup autoscroll interval
});
</script>

<style scoped></style>
