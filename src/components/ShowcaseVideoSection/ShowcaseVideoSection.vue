<template>
    <section class="showcase">
        <Shape3 class="shape" id="shape3"></Shape3>
        <Shape1 class="shape" id="shape1"></Shape1>
        <MainTitle></MainTitle>
        <ShowcaseVideo :videoUrl="videoUrl"></ShowcaseVideo>
        
    </section>
</template>

<script setup>
import MainTitle from './MainTitle.vue';
import ShowcaseVideo from './ShowcaseVideo.vue';
import Shape1 from "../../assets/svgs/shape1.svg"
import Shape2 from "../../assets/svgs/shape2.svg"
import Shape3 from "../../assets/svgs/shape3.svg"
const videoUrl="https://www.youtube.com/watch?v=TJ9nlna_soU"
</script>