<template>
    <section class="clients">
        <h1 class="clients-title">Clients I've worked with</h1>
        <div class="clients-grid">
            <ClientCard
                class="client-slide"
                v-for="(client, index) in [...clients]"
                :key="`${client.youtubeChannelLink}-${index}`"
                :youtubeChannelLink="client.youtubeChannelLink"
                :profileImage="client.profileImage"
                :name="client.name"
                :subscriberCount="client.subscriberCount"
            />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ClientCard from "./ClientCard.vue"; // Import your ClientCard component
import { clients } from "./clients.js"; // Import your sorted clients data
import ArrowRight from "/src/assets/icons/ArrowRight.vue";
import ArrowLeft from "/src/assets/icons/ArrowLeft.vue";

// Sort clients by subscriberCount
clients.sort((a, b) => b.subscriberCount - a.subscriberCount);

const currentIndex = ref(0);
const translateValue = ref(0);
const cardWidth = 200 + 16; // Adjust the width of each card and the gap
const totalWidth = cardWidth * clients.length; // Total width of the slider
let autoScrollInterval = null;
let autoScrollTimeout = null;

const slideDuration = 0.7; // Adjust the duration of slide animation (in seconds)

const prevSlide = () => {
    currentIndex.value =
        (currentIndex.value - 1 + clients.length) % clients.length;
    translateValue.value = currentIndex.value * cardWidth;
    adjustSlideDuration(slideDuration); // Adjust slide animation duration
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % clients.length;
    translateValue.value = currentIndex.value * cardWidth;
    adjustSlideDuration(slideDuration); // Adjust slide animation duration
};

const adjustSlideDuration = (duration) => {
    const slidesElement = document.querySelector(".slides");
    slidesElement.style.transitionDuration = `${duration}s`;
    setTimeout(() => {
        slidesElement.style.transitionDuration = "0.5s"; // Reset to default transition duration
    }, duration * 1000);
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

<style scoped>
.slider-container {
    width: 100%;
    overflow-x: auto;
    position: relative;
    cursor: grab;
}

.slides {
    display: flex;
    transition: transform 0.1s ease;
    width: fit-content; /* Adjust width based on the number of slides */
}

.slide {
    flex: 0 0 auto;
    width: 200px; /* Adjust width of each card */
    box-sizing: border-box; /* Ensure padding and border are included in the width */
    margin-right: 1rem; /* Add 1rem gap between slides */
}

.slider-container:active {
    cursor: grabbing;
}

/* Custom scrollbar styles */
.slider-container::-webkit-scrollbar {
    height: 2px; /* Height for horizontal scrollbar */
}


.slider-container::-webkit-scrollbar-track {
    background: transparent; /* Background of the scrollbar track */
}
</style>
