<template>
    <h1 class="timelines-title">My most impressive timelines</h1>
    <section class="carousel-timelines">
        <Splide :options="mainOptions" ref="mainSplide">
            <SplideSlide v-for="(timeline, index) in timelines" :key="index">
                <img
                    class="timeline-img"
                    :src="timeline.imageLink"
                    @click="openModal(timeline.imageLink)"
                />
                <section class="timeline-info">
                    <a
                        :href="timeline.videoLink"
                        class="timeline-video-title"
                        target="_blank"
                        >{{ timeline.title }}</a
                    >
                    <div class="channel-timeline">
                        <img
                            class="timeline-profile-img"
                            :src="timeline.profileImage"
                            alt=""
                        />
                        <a
                            :href="timeline.channelLink"
                            class="timeline-video-channel"
                            target="_blank"
                        >
                            {{ timeline.channelName }}
                        </a>
                    </div>
                </section>
            </SplideSlide>
        </Splide>
        <Splide :options="thumbsOptions" ref="thumbsSplide">
            <SplideSlide
                v-for="(timeline, index) in timelines"
                :key="index"
                class="pointer"
            >
                <img class="timeline-thumbnail-img" :src="timeline.imageLink" />
            </SplideSlide>
        </Splide>
    </section>

    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
        <div class="modal-content">
            <button class="close-button" @click="closeModal">&times;</button>
            <img :src="modalImage" class="modal-img" />
            <h1 class="timelines-title small-text">
                Click anywhere to close the image or press the close button.
            </h1>
        </div>
    </div>
</template>

<script setup>
import "@splidejs/vue-splide/css";
import { ref, onMounted } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { timelines } from "./timelines.js";

const mainSplide = ref(null);
const thumbsSplide = ref(null);

const mainOptions = {
    rewind: true,
    pagination: false,
    gap: "1rem",
};

const thumbsOptions = {
    type: "slide",
    rewind: true,
    gap: "0.5rem",
    pagination: false,
    fixedWidth: 180,
    fixedHeight: 110,
    cover: true,
    focus: "center",
    isNavigation: true,
    updateOnMove: true,
    arrows: false,
};

const isModalOpen = ref(false);
const modalImage = ref("");

const openModal = (image) => {
    modalImage.value = image;
    isModalOpen.value = true;
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = "auto";
};

onMounted(() => {
    if (mainSplide.value && thumbsSplide.value) {
        mainSplide.value.sync(thumbsSplide.value.splide);
        thumbsSplide.value.sync(mainSplide.value.splide);
    }
});
</script>

<style></style>
