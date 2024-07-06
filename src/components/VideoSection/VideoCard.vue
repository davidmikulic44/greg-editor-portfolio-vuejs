<template>
    <SplideSlide>
        <a :href="youtubeVideoLink" target="_blank" class="video-link">
            <article class="video-card">
                <img
                    :src="thumbnail"
                    class="thumbnail-image"
                    alt="Channel Profile Image"
                />
                <section class="video-info-out">
                    <img
                        :src="profileImage"
                        class="video-profile-image"
                        alt="Channel Profile Image"
                    />

                    <div class="video-info">
                        <h1 class="video-name">{{ truncatedTitle }}</h1>
                        <div class="video-stats">
                            <p class="view-count">{{ channelName }}</p>
                            <p class="view-count">{{ formattedViewCount }} views</p>
                        </div>
                        
                    </div>
                </section>
            </article>
        </a>
    </SplideSlide>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    youtubeVideoLink: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    viewCount: {
        type: Number,
        required: true,
    },
    channelName: {
        type: String,
        required: true,
    }
});

const formattedViewCount = computed(() => {
    const count = props.viewCount;
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

const truncatedTitle = computed(() => {
    const maxLength = 37;
    if (props.title.length <= maxLength) {
        return props.title;
    } else {
        return props.title.slice(0, maxLength) + '...';
    }
});
</script>
