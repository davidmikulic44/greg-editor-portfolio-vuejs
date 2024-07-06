<template>
    <SplideSlide>
        <a :href="youtubeChannelLink" target="_blank" class="client-link">
            <article class="client-card">
                <img
                    :src="profileImage"
                    class="client-image"
                    alt="Channel Profile Image"
                />
                <div class="client-info">
                    <h1 class="client-name">{{ name }}</h1>
                    <p class="subscriber-count">
                        {{ formattedSubscriberCount }} subscribers
                    </p>
                </div>
            </article>
        </a>
    </SplideSlide>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    youtubeChannelLink: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    subscriberCount: {
        type: Number,
        required: true,
    },
});

const formattedSubscriberCount = computed(() => {
    const count = props.subscriberCount;
    if (typeof count !== "number" || count < 0) {
        return "N/A";
    }
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + "K";
    } else {
        return count.toString();
    }
});
</script>
