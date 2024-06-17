import { createApp } from 'vue';
import './styles/_main.scss';
import App from './App.vue';
import router from './router/router.js';
import VueSplide from '@splidejs/vue-splide';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'; // Import AutoScroll as named import

const app = createApp(App);

// Install VueSplide and configure with AutoScroll extension
app.use(router);
app.use(VueSplide, {
  components: {
    Splide,
    SplideSlide,
  },
  // Pass Splide options here
  extensions: [AutoScroll],
});

app.mount('#app');
