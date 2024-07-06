<template>
    <div class="video-container">
        <iframe
            width="100%"
            height="100%"
            :src="computedVideoUrl"
            title="Showcase reel"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";
const props = defineProps({
    videoUrl: {
        type: String,
        required: true,
    },
});
const computedVideoUrl = computed(() => {
    const embedUrl = props.videoUrl.replace("watch?v=", "embed/");
    return embedUrl;
});
</script>
